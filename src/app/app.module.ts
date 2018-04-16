import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { ErrorComponent } from './error/error.component';
import { HomeService } from "./home/home.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'prefix' },
      { path: 'error', component: ErrorComponent},
      { path: '**', redirectTo: 'error' }
    ]),
  ],
  providers: [
    AppComponent,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
