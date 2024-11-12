import { Component } from '@angular/core';

import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { ControlComponent } from '../../shared/control/control.component';
import type { Ticket, TicketCore } from './tickets.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticketData: TicketCore) {
    this.tickets.unshift({
      id: Math.random().toString(),
      status: 'open',
      ...ticketData,
    });
  }

  closeTicket(id: string) {
    console.log('sc');
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'closed',
        };
      } else return ticket;
    });
    console.log(this.tickets);
  }
}
