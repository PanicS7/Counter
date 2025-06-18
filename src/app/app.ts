import { Component } from '@angular/core';
import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'counter-angular';
}
