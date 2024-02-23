import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0;

  constructor(private counterService: CounterService) {}

  increment(): void {
    this.count = this.counterService.incrementCount();
  }

  decrement(): void {
    this.count = this.counterService.decrementCount();
  }
}
