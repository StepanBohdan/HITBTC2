import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  _apiUrl = 'api/2/public/';

  constructor(
    private http: HttpClient
  ) {

  }

  getCurrencies() {
    return this.http
      .get<Currency[]>(this._apiUrl + 'currency')
  }

}

export interface Currency{
  "id": string,
  "fullName": string,
  "crypto": boolean,
  "payinEnabled": boolean,
  "payinPaymentId": boolean,
  "payinConfirmations": number,
  "payoutEnabled": boolean,
  "payoutIsPaymentId": boolean,
  "transferEnabled": boolean,
  "delisted": boolean,
  "payoutFee": string
}
