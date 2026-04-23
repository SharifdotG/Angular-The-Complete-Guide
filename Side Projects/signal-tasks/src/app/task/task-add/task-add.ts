import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-task-add',
  imports: [],
  templateUrl: './task-add.html',
  styleUrl: './task-add.css',
})
export class TaskAdd {
  title = signal('');
  add = output<string>();

  onAdd() {
    const val = this.title().trim();
    if (val) {
      this.add.emit(val);
      this.title.set('');
    }
  }
}
