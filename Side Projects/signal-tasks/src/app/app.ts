import { Component, effect, inject, signal } from '@angular/core';
import { TaskAdd } from './task/task-add/task-add';
import { TaskItem } from './task/task-item/task-item';
import { TaskFilter } from './task/task-filter/task-filter';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-root',
  imports: [TaskAdd, TaskItem, TaskFilter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private taskService = inject(TaskService);

  filteredTask = this.taskService.filteredTasks;
  currentFilter = this.taskService.filter;
  activeCount = this.taskService.activeCount;

  addTask(title: string) {
    this.taskService.addTask(title);
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  changeFilter(filter: 'all' | 'active' | 'completed') {
    this.taskService.changeFilter(filter);
  }

  constructor() {
    effect(() => {
      localStorage.setItem('saved-tasks', JSON.stringify(this.taskService.allTasks()));
    });
  }
}
