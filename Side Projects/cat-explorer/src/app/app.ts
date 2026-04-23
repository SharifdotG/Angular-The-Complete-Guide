import { Component, inject, signal } from '@angular/core';
import { CatImage, CatService } from './cat.service';
import { catchError, map, of, startWith, Subject, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CatCard } from './cat-card/cat-card';

@Component({
  selector: 'app-root',
  imports: [CatCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private catService = inject(CatService);
  private fetchCatTriggers$ = new Subject<string | undefined>();

  selectedBreed = signal<string | undefined>(undefined);
  isLoading = signal<boolean>(false);
  breeds = toSignal(this.catService.getBreeds(), { initialValue: [] });
  catImage = toSignal(
    this.fetchCatTriggers$.pipe(
      startWith(undefined),
      tap(() => this.isLoading.set(true)),
      switchMap((breedId) =>
        this.catService.getRandomCat(breedId).pipe(
          map((cats: CatImage[]) => cats[0] ?? null),
          catchError(() => of(null)),
        ),
      ),
      tap(() => this.isLoading.set(false)),
    ),
    { initialValue: null },
  );

  fetchCat() {
    this.fetchCatTriggers$.next(this.selectedBreed());
  }

  selectBreed(breedId: string) {
    if (breedId === '') {
      this.selectedBreed.set(undefined);
    } else {
      this.selectedBreed.set(breedId);
    }
    this.fetchCat();
  }
}
