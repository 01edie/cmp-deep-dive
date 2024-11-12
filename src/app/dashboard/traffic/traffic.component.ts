import { Component, input } from '@angular/core';

interface TrafficData {
  id: string;
  value: number;
}

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  trafficData = input.required<TrafficData[]>();
  maxTraffic = input.required<number>();
}
