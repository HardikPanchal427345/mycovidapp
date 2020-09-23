import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { CountryComponent } from './country/country.component';
import { CasecardComponent } from './casecard/casecard.component';

import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    CountryComponent,
    CasecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {HttpClientModule; }
