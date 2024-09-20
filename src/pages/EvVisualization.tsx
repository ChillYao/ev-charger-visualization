import React, { useState } from "react";
import { InputParameters } from "../components/input-parameters/InputParameters";
import { OutputVisualization } from "../components/output-visualization/OutputVisualization";
import { ParamsState } from "./EvVisualization.types";
import { PageContainer } from "./EvVisualization.styles";
import { generateMockData } from "../utils/generateMockData";

export const EvVisualization: React.FC = () => {
  // Combine input parameters into one state object
  const [params, setParams] = useState<ParamsState>({
    numChargepoints: 20,
    arrivalMultiplier: 100,
    carConsumption: 18,
    chargePower: 11,
  });

  // Handler function to update input parameters
  const handleInputChange = (key: keyof ParamsState, value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      [key]: value,
    }));
  };

  // Generate mock data based on input parameters
  const {
    chargingData,
    exemplaryDayData,
    totalEnergyConsumed,
    theoreticalMaxPower,
    chargingEvents,
  } = generateMockData(
    params.numChargepoints,
    params.chargePower,
    params.arrivalMultiplier,
    params.carConsumption
  );

  return (
    <PageContainer>
      <InputParameters params={params} onInputChange={handleInputChange} />
      <OutputVisualization
        chargingData={chargingData}
        exemplaryDayData={exemplaryDayData}
        totalEnergyConsumed={totalEnergyConsumed}
        theoreticalMaxPower={theoreticalMaxPower}
        chargingEvents={chargingEvents}
      />
    </PageContainer>
  );
};
