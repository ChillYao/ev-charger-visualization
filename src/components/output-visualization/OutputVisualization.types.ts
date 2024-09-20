export interface OutputProps {
  totalEnergyConsumed: number;
  theoreticalMaxPower: number;
  chargingEvents: number[]; // [yearly, monthly, weekly, daily]
  chargingData: ChargingData[];
  exemplaryDayData: ExemplaryDayData[];
}

export interface ChargingData {
  name: string;
  value: number;
}
export interface ExemplaryDayData {
  name: string;
  value: number;
}
