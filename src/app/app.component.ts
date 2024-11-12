import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    DashboardItemComponent,
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
  ],
})
export class AppComponent implements OnInit {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private interval?:ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      // set subscription here
      console.log(this.currentStatus());
      // automatically cleans up signal, no issues
    });
  }

  // effect clean up example
  // effect((onCleanup) => {
  //   const tasks = getTasks();
  //   const timer = setTimeout(() => {
  //     console.log(`Current number of tasks: ${tasks().length}`);
  //   }, 1000);
  //   onCleanup(() => {
  //     clearTimeout(timer);
  //   });
  // });

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 3000);
    this.destroyRef.onDestroy(() => {
      clearTimeout(interval);
    });
  }
  // ngOnDestroy(): void {
  //     clearInterval(this.interval)
  // }
}
