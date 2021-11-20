import {TariffSettings} from "./tariff";

export const config: {name: string, tariffs: TariffSettings[]}[] = [
  {
    name: 'Аэрофлот',
    tariffs: [
      {
        costPerKilometer: 4,
        maxFreeBaggageWeight: 5,
        maxBaggageWeight: 20,
        baggageCostFix: 4000,
        baggageCostPerKg: 0,
        discountAge: 0,
        discountMultiplier: 1,
        name: "Эконом",
      },
      {
        costPerKilometer: 8,
        maxFreeBaggageWeight: 20,
        maxBaggageWeight: 50,
        baggageCostFix: 5000,
        baggageCostPerKg: 0,
        discountAge: 7,
        discountMultiplier: 0.7,
        name: "Продвинутый",
      },
      {
        costPerKilometer: 15,
        maxFreeBaggageWeight: 50,
        maxBaggageWeight: 50,
        baggageCostFix: 0,
        baggageCostPerKg: 0,
        discountAge: 16,
        discountMultiplier: 0.7,
        name: "Люкс",
      },
    ],
  },
  {
    name: 'РЖД',
    tariffs: [
      {
        costPerKilometer: 0.5,
        maxFreeBaggageWeight: 15,
        maxBaggageWeight: 50,
        baggageCostFix: 0,
        baggageCostPerKg: 50,
        discountAge: 5,
        discountMultiplier: 0.5,
        name: "Эконом",
      },
      {
        costPerKilometer: 2,
        maxFreeBaggageWeight: 20,
        maxBaggageWeight: 60,
        baggageCostFix: 0,
        baggageCostPerKg: 50,
        discountAge: 8,
        discountMultiplier: 0.7,
        name: "Продвинутый",
      },
      {
        costPerKilometer: 4,
        maxFreeBaggageWeight: 60,
        maxBaggageWeight: 60,
        baggageCostFix: 0,
        baggageCostPerKg: 0,
        discountAge: 16,
        discountMultiplier: 0.8,
        name: "Люкс",
      },
    ],
  },
];
