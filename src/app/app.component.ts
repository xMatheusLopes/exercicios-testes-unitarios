import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exercicios';

  arrayNumbers: number[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getCEP().subscribe(res => console.log(res));
  }

  sum(n1: number, n2: number): number {
    return n1 + n2;
  }

  // Checa se a idade da pessoa é considerado de maior ou de menor
  checkOfAge(age: number): boolean {
    if (age >= 18) {
      return true;
    }

    return false;
  }

  // Incrementa em 1 cada item no array
  incrementItemsInArray(): void {
    if (this.arrayNumbers.length) {
      this.arrayNumbers = this.arrayNumbers.map((item) => {
        return item + 1;
      });
    }
  }
}
