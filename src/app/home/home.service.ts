import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import { Currency } from '../shared/models/currency.model';
import { Tickers } from "../shared/models/tickers.model";

@Injectable()
export class HomeService {

  _apiUrl = 'api/2/public/';
  currencyName = '';

  constructor(
    private http: HttpClient
  ) {

  }

  getCurrencies() {
    return this.http
      .get<Currency[]>(this._apiUrl + 'currency')
  }

  searchCurrency() {
    this.http
      .get<Currency[]>(this._apiUrl + 'currency' + this.currencyName)
  }

  getTickers() {
    return this.http
      .get<Tickers[]>(this._apiUrl + 'ticker')
  }

}
