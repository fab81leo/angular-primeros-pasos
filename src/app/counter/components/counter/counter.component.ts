import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  // ** Con back tips `` podemos trabajar multilínea **
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  constructor() { }

  // ** Si el método no regresa nada es conveniente colocar el void **
  increaseBy(value: number): void {
    this.counter += value;
  }

  // ** Reseteando el valor del contador a 10 **
  resetCounter() {
    this.counter = 10;
  }

}
