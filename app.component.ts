import { Component } from '@angular/core';
import { CurrencyapiService } from './currencyapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency Calculator';
  currjson:any=[];
  base = 'USD';
  country2 = 'USD';
  result : String='1';

  changeBase(a: string)
  {
    this.base = a;
    console.log(this.base)
  }
  tocountry(a:string)
  {
    this.country2=a;
    console.log(this.country2);
  }

  constructor(private currency:CurrencyapiService)
  {

  }
  convert()
  {
   this.currency.getcurrency_data(this.base).subscribe(data=> this.currjson= JSON.stringify(data));
   this.currjson =JSON.parse(this.currjson);

   this.result= this.currjson.rates.INR;
  }
}
