import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from "./home.service";
import { Currency } from "../shared/models/currency.model";
import { Tickers } from "../shared/models/tickers.model";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { debounceTime, map, startWith } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnDestroy, OnInit {

  currencies: Currency[] = [];
  tickers: Tickers[];
  currency = new FormControl('');
  _apiUrl = 'api/2/public/';
  currencyName = '';

  constructor(private homeService: HomeService) { }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.getCurrencies();
    this.getTickers();

    // this.homeService.getCurrencies().subscribe((currencies) => {
    //   this.currencies = currencies;
    //   this.currency.patchValue('');
    //   console.log(this.currency)
    // });
  }

  searchCurrencies() {
    this.homeService.getTickers().pipe(
      map((tickers) => tickers.filter((ticker) => {
        return ticker.symbol.includes(this.currency.value);
      }))
    ).subscribe((a) => console.log(a));

  }

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
