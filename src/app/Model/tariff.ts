import {PassengerInfo} from "./passengerInfo";

export interface TariffSettings {
  costPerKilometer: number;
  maxFreeBaggageWeight: number;
  maxBaggageWeight: number;
  baggageCostFix: number;
  baggageCostPerKg: number;
  discountAge: number;
  discountMultiplier: number;
  name: string;
}

export class Tariff {

  constructor(private settings: TariffSettings, private passengerInfo: PassengerInfo) {
  }

  isAvailable(): boolean {
    return this.passengerInfo.weight <= this.settings.maxBaggageWeight;
  }

  getCost(): number {
    let distancePrice = this.settings.costPerKilometer * this.passengerInfo.distance;
    const baggagePrice = this.settings.maxFreeBaggageWeight >= this.passengerInfo.weight ? 0 : (this.settings.baggageCostFix + this.settings.baggageCostPerKg * (this.passengerInfo.weight - this.settings.maxFreeBaggageWeight));
    if (this.passengerInfo.age <= this.settings.discountAge) {
      distancePrice *= this.settings.discountMultiplier;
    }
    return distancePrice + baggagePrice;
  }

  getTariffName(): string {
    return this.settings.name;
  }
}
