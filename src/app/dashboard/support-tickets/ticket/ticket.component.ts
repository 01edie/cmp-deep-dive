import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticketData = input.required<Ticket>();
  // input config - alias, transform((data)=>...)
  isExpanded = signal(false);
  onClose = output()
  // output config - alias

  toggleExpand() {
    // this.isExpanded.set(!this.isExpanded())
    this.isExpanded.update((s) => !s);
  }
  onCloseTicket(){
    this.onClose.emit()
  }
}
