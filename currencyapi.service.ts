import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapiService {

  constructor(private http:HttpClient) { 

  }
  getcurrency_data(country1:String)
  {
    let url=' http://api.exchangerate.host/latest?base='+country1
    return this.http.get(url);
  }
}
