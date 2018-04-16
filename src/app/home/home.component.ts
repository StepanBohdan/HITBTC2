import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";

class Currency {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // symbols = '';
  currencies: Currency[]=[];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getHitbtcCurrencies();
  }

}
