import React from 'react';
import { InputContainer, Label, Slider } from './InputParameters.styles';
import { InputProps } from './InputParameters.types';

export const InputParameters: React.FC<InputProps> = ({
  params,
  onInputChange,
}) => {
  const { numChargepoints, arrivalMultiplier, carConsumption, chargePower } =
    params;

  return (
    <InputContainer>
      <Label>
        Number of Chargepoints: {numChargepoints}
        <Slider
          type='range'
          min='1'
          max='30'
          value={numChargepoints}
          onChange={(e) =>
            onInputChange('numChargepoints', parseInt(e.target.value))
          }
        />
      </Label>

      <Label>
        Arrival Probability Multiplier (%): {arrivalMultiplier}%
        <Slider
          type='range'
          min='20'
          max='200'
          value={arrivalMultiplier}
          onChange={(e) =>
            onInputChange('arrivalMultiplier', parseInt(e.target.value))
          }
        />
      </Label>

      <Label>
        Car Consumption (kWh/100km): {carConsumption}
        <Slider
          type='range'
          min='10'
          max='30'
          value={carConsumption}
          onChange={(e) =>
            onInputChange('carConsumption', parseInt(e.target.value))
          }
        />
      </Label>

      <Label>
        Charging Power per Chargepoint (kW): {chargePower}
        <Slider
          type='range'
          min='7'
          max='50'
          value={chargePower}
          onChange={(e) =>
            onInputChange('chargePower', parseInt(e.target.value))
          }
        />
      </Label>
    </InputContainer>
  );
};
