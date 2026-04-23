import { computed, effect, Injectable, signal } from '@angular/core';
import { FilterType, Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>(JSON.parse(localStorage.getItem('saved-tasks') || '[]'));
  filter = signal<FilterType>('all');

  filteredTasks = computed(() => {
    const currentFilter = this.filter();
    const currentTasks = this.tasks();

    switch (currentFilter) {
      case 'active':
        return currentTasks.filter((t) => !t.completed);
      case 'completed':
        return currentTasks.filter((t) => t.completed);
      default:
        return currentTasks;
    }
  });

  activeCount = computed(() => this.tasks().filter((t) => !t.completed).length);

  allTasks = computed(() => this.tasks());

  addTask(title: string) {
    this.tasks.update((tasks) => [...tasks, { id: Date.now(), title, completed: false }]);
  }

  toggleTask(id: number) {
    this.tasks.update((tasks) =>
      tasks.map((t) => (t.id == id ? { ...t, completed: !t.completed } : t)),
    );
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }

  changeFilter(filter: FilterType) {
    this.filter.set(filter);
  }
}
