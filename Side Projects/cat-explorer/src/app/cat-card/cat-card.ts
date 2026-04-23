import { Component, input } from '@angular/core';
import { CatImage } from '../cat.service';

@Component({
  selector: 'app-cat-card',
  imports: [],
  templateUrl: './cat-card.html',
  styleUrl: './cat-card.css',
})
export class CatCard {
  cat = input.required<CatImage>();
}
