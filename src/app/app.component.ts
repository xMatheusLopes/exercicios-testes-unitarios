import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercicios';

  sum(n1: number, n2: number): number {
    return n1 + n2;
  }
}
