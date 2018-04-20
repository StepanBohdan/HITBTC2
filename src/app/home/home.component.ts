import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";
import { Currency } from "../shared/models/currency.model";
import { Tickers } from "../shared/models/tickers.model";
import { FormControl } from "@angular/forms";
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

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getCurrencies();
    this.getTickers();

    this.homeService.getCurrencies().subscribe((currencies) => {
      this.currencies = currencies;
      this.currency.patchValue('');
    });
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
