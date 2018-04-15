import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HitBtc';
  private apiUrl = '';
  data: any = {};

  constructor(private http: HttpClient) {
    console.log('Bohdan');
    this.getData();
  }

  getData() {
    return
  }
}
