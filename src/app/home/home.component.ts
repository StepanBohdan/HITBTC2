import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";
import { Currency } from "../shared/models/currency.model";
import { Tickers } from "../shared/models/tickers.model";
import { FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, startWith } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  currencies: Currency[] = [];
  tickers: Tickers[];
  currency = new FormControl();
  _apiUrl = 'api/2/public/';
  currencyName = '';

  constructor(private homeService: HomeService,
              private http: HttpClient) { }

  ngOnInit() {
    this.getCurrencies();
    this.getTickers();

    this.homeService.getCurrencies().subscribe((currencies) => {
      this.currencies = currencies;
      this.currency.patchValue('');
    });
  }

  // searchCurrency() {
  //   this.homeService.getCurrencies()
  //     .subscribe(
  //       resultArray => this.currencyName = resultArray
  //     )
  // }

  getCurrencies() {
    this.homeService.getCurrencies()
      .subscribe(
        resultArray => this.currencies = resultArray
      )
  }

  getTickers() {
    this.homeService.getTickers()
      .subscribe(
        resultArray => this.tickers = resultArray
      )
  }
}
