import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getCEP() {
    return this.http.get("https://viacep.com.br/ws/01001000/json/");
  }
}
