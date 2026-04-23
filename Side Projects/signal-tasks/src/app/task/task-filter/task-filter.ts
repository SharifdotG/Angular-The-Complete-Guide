import { Component, input, output } from '@angular/core';
import { FilterType } from '../task.model';

@Component({
  selector: 'app-task-filter',
  imports: [],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.css',
})
export class TaskFilter {
  currentFilter = input.required<FilterType>();
  activeCount = input.required<number>();
  filterChange = output<FilterType>();
}
