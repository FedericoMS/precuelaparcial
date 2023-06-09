import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  obtenerPaises()
  {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

}
