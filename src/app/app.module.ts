import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {InputsComponent} from './inputs/inputs.component';
import {CarrierComponent} from './carrier/carrier.component';
import {TariffComponent} from './tariff/tariff.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    CarrierComponent,
    TariffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
