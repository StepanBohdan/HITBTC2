import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {
  constructor(
    private http: HttpClient
  ) {}

  getHitbtcSymbols() {
    return this.http.get('https://api.hitbtc.com/api/2/public/symbol')
    .subscribe(
      (res: Response)=>{
      const getSymbols = res.json();
        console.log(getSymbols);
    }
    )
  }
}
