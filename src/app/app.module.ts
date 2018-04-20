import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { ErrorComponent } from './error/error.component';
import { HomeService } from "./home/home.service";
import { SearchByCurrencyPipe } from "./shared/pipes/search-by-currency.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    SearchByCurrencyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'prefix' },
      { path: 'error', component: ErrorComponent},
      { path: '**', redirectTo: 'error' }
    ]),
  ],
  providers: [
    AppComponent,
    HomeService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
