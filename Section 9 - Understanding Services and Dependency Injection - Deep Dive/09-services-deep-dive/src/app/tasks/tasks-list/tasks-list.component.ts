import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TasksServiceToken } from '../../../main';
import {
  Task,
  TASK_STATUS_OPTIONS,
  taskStatusOptionsProvider,
} from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  imports: [TaskItemComponent],
  providers: [taskStatusOptionsProvider],
})
export class TasksListComponent {
  private tasksService = inject(TasksServiceToken);
  private selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }

  trackByOption(_index: number, option: { value: string }) {
    return option.value;
  }

  trackByTask(_index: number, task: Task) {
    return task.id;
  }
}
