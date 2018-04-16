import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
  getCurrencies: any = {};

  constructor(
    private http: HttpClient
  ) {
    this.getHitbtcCurrencies();
    this.getId();
  }

  // getHitbtcCurrencies() {
  //   return this.http.get('https://api.hitbtc.com/api/2/public/currency')
  //   .subscribe(
  //     (res: Response)=>{
  //     const getCurrencies = res.json();
  //       console.log(getCurrencies);
  //   }
  //   )
  // }

  getHitbtcCurrencies() {
    return this.http.get('https://api.hitbtc.com/api/2/public/currency')
      .map((res: Response) => res.json())
  }

  getId() {
    this.getHitbtcCurrencies().subscribe(data => {
      console.log(data);
      this.getCurrencies = data;
    })
  }
}
