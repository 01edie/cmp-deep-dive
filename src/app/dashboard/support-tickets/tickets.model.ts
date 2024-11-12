export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'closed';
}

export interface TicketCore {
  title: string;
  request: string;
}
