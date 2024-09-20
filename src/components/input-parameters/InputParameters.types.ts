export interface ParamsState {
  numChargepoints: number;
  arrivalMultiplier: number;
  carConsumption: number;
  chargePower: number;
}

export interface InputProps {
  params: ParamsState;
  onInputChange: (key: keyof ParamsState, value: number) => void;
}
