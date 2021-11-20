import { Component } from '@angular/core';
import {PassengerInfo} from "./Model/passengerInfo";
import {config} from "./Model/config"
import {Carrier} from "./Model/carrier";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carriers: Carrier[] = [];

  onDataSubmitted(passengerInfo: PassengerInfo) {
    this.carriers = config.map(carrierConfig => new Carrier(carrierConfig.name, carrierConfig.tariffs, passengerInfo));
  }
}
