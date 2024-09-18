// components/InputParameters.tsx
import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 80%;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  display: flex;
  justify-content: space-between;
`;

const Slider = styled.input`
  width: 100%;
  margin: 0.5rem 0;
`;

interface ParamsState {
  numChargepoints: number;
  arrivalMultiplier: number;
  carConsumption: number;
  chargePower: number;
}

interface InputProps {
  params: ParamsState;
  onInputChange: (key: keyof ParamsState, value: number) => void;
}

export const InputParameters: React.FC<InputProps> = ({ params, onInputChange }) => {
  const { numChargepoints, arrivalMultiplier, carConsumption, chargePower } = params;

  return (
    <InputContainer>
      <Label>
        Number of Chargepoints: {numChargepoints}
        <Slider
          type="range"
          min="1"
          max="30"
          value={numChargepoints}
          onChange={(e) => onInputChange("numChargepoints", parseInt(e.target.value))}
        />
      </Label>

      <Label>
        Arrival Probability Multiplier (%): {arrivalMultiplier}%
        <Slider
          type="range"
          min="20"
          max="200"
          value={arrivalMultiplier}
          onChange={(e) => onInputChange("arrivalMultiplier", parseInt(e.target.value))}
        />
      </Label>

      <Label>
        Car Consumption (kWh/100km): {carConsumption}
        <Slider
          type="range"
          min="10"
          max="30"
          value={carConsumption}
          onChange={(e) => onInputChange("carConsumption", parseInt(e.target.value))}
        />
      </Label>

      <Label>
        Charging Power per Chargepoint (kW): {chargePower}
        <Slider
          type="range"
          min="7"
          max="50"
          value={chargePower}
          onChange={(e) => onInputChange("chargePower", parseInt(e.target.value))}
        />
      </Label>
    </InputContainer>
  );
};
