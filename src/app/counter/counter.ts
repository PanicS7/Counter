import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  counter:number = 0;

  increment () {
    return this.counter++;
  }

   decrement () {
    return this.counter--;
  }
}
