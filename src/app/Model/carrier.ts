import {Tariff, TariffSettings} from "./tariff";
import {PassengerInfo} from "./passengerInfo";

export class Carrier {
  tariffs: Tariff[] = [];

  constructor(private name: string, tariffs: TariffSettings[], passengerInfo: PassengerInfo) {
    this.tariffs = tariffs.map(tariff => new Tariff(tariff, passengerInfo));
  }

  getName(): string {
    return this.name;
  }

  getAvailableTariffs(): Tariff[] {
    return this.tariffs.filter(tariff => tariff.isAvailable());
  }
}
