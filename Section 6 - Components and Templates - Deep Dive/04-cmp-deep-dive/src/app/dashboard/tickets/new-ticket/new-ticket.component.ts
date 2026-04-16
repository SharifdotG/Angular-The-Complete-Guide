import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  output,
  Output,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../sharted/button/button.component';
import { ControlComponent } from '../../../sharted/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{ title: string; text: string }>();
  add = output<{ title: string; text: string }>();

  ngOnInit() {
    console.log('AFTER VIEW INIT!');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT!');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });

    this.form?.nativeElement.reset();
  }
}
