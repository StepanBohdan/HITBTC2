import { Component, OnInit } from '@angular/core';
import { Currency, HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currencies: Currency[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies() {
    this.homeService.getCurrencies()
      .subscribe(
        resultArray => this.currencies = resultArray
      )
  }
}
