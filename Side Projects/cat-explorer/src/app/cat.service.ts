import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: any[];
}

export interface Breed {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.thecatapi.com/v1';

  getRandomCat(breedId?: string): Observable<CatImage[]> {
    let url = `${this.apiUrl}/images/search?limit=1`;
    if (breedId) {
      url += `&breed_ids${breedId}`;
    }
    return this.http.get<CatImage[]>(url);
  }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.apiUrl}/breeds`);
  }
}
