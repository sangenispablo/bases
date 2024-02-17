import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(0)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number = 1): void {
    if (value == 0) {
      this.counter = 10;
    } else {
      this.counter += value;
    }
  }
}
