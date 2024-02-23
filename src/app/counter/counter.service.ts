import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count: number = 0;

  getCount(): number {
    return this.count;
  }

  incrementCount(): number {
    this.count++;
    return this.count;
  }

  decrementCount(): number {
    if (this.count > 0) {
      this.count--;
    }
    return this.count;
  }
}
