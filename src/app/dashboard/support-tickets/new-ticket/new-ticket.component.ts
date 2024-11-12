import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import type { TicketCore } from '../tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // signal viewChild Method
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  @Output() private add = new EventEmitter<TicketCore>();

  ngOnInit(): void {
    // not guaranteed view child | not available
    // console.log('ON_INIT');
    // console.log(this.form);
  }

  ngAfterViewInit(): void {
    // guaranteed view child
    // console.log('AFTER VIEW INIT');
    // console.log(this.form);
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    this.add.emit({ title, request: ticketText });
    this.form?.nativeElement.reset();
  }
}
