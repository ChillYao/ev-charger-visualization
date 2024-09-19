// App.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { InputParameters } from "./components/InputParameters";
import { OutputVisualization } from "./components/OutputVisualization";
import ReonicLogo from "./assets/reonic-logo.svg"; // Ensure the path is correct

const AppContainer = styled.div`
  padding: 2rem 0;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ccc;

  justify-content: space-between;
`;

const Logo = styled.img`
  height: 1rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #f8f9fa;
  border-top: 1px solid #ccc;
  margin-top: auto;
`;

interface ParamsState {
  numChargepoints: number;
  arrivalMultiplier: number;
  carConsumption: number;
  chargePower: number;
}

const generateChargingData = (numChargepoints: number, chargePower: number) => {
  const chargingData = [];
  for (let i = 1; i <= numChargepoints; i++) {
    const value = Math.random() * chargePower;
    chargingData.push({ name: `P${i}`, value: Math.round(value * 100) / 100 });
  }
  return chargingData;
};

const generateExemplaryDayData = (
  numChargepoints: number,
  arrivalMultiplier: number,
  carConsumption: number,
  chargePower: number
) => {
  const exemplaryDayData = [];
  const totalChargeCapacity = numChargepoints * chargePower;

  const arrivalProbabilities = [
    0, 0, 0, 0.0094, 0.0094, 0.0094, 0.0094, 0.0094, 0.0283, 0.0283, 0.0566,
    0.0566, 0.0566, 0.0755, 0.0755, 0.0755, 0.1038, 0.1038, 0.1038, 0.0472,
    0.0472, 0.0472, 0.0094, 0.0094, 0,
  ];

  for (let hour = 0; hour <= 24; hour++) {
    const time = `${hour}:00`;
    const arrivingCars = arrivalMultiplier * arrivalProbabilities[hour];
    const totalEnergyRequired = arrivingCars * carConsumption;
    const value = Math.min(totalEnergyRequired, totalChargeCapacity);
    exemplaryDayData.push({ time, value: Math.round(value * 100) / 100 });
  }

  return exemplaryDayData;
};

const calculateTotalEnergyCharged = (
  exemplaryDayData: {
    time: string;
    value: number;
  }[]
) => {
  return exemplaryDayData.reduce((total, entry) => total + entry.value, 0);
};

const estimateChargingEvents = (
  numChargepoints: number,
  arrivalMultiplier: number,
  carConsumption: number,
  chargePower: number
) => {
  const dailyEvents = Math.floor(
    (numChargepoints * arrivalMultiplier * carConsumption) / chargePower
  );
  const weeklyEvents = dailyEvents * 7;
  const monthlyEvents = dailyEvents * 30;
  const yearlyEvents = dailyEvents * 365;
  return [yearlyEvents, monthlyEvents, weeklyEvents, dailyEvents];
};

const App: React.FC = () => {
  // Combine input parameters into one state object
  const [params, setParams] = useState<ParamsState>({
    numChargepoints: 20,
    arrivalMultiplier: 100,
    carConsumption: 18,
    chargePower: 11,
  });

  // Mock state for output values (replace with real data later)
  const chargingEvents = estimateChargingEvents(
    params.numChargepoints,
    params.arrivalMultiplier,
    params.carConsumption,
    params.chargePower
  );

  // Mock data for charging values per chargepoint (kW)
  const chargingData = generateChargingData(
    params.numChargepoints,
    params.chargePower
  );

  // Mock data for exemplary day's charging behavior (kW at 15-min intervals)
  const exemplaryDayData = generateExemplaryDayData(
    params.numChargepoints,
    params.arrivalMultiplier,
    params.carConsumption,
    params.chargePower
  );

  const totalEnergyConsumed = calculateTotalEnergyCharged(exemplaryDayData);

  // Calculate theoretical maximum power
  const theoreticalMaxPower = params.numChargepoints * params.chargePower * 24;

  // Handler function to update input parameters
  const handleInputChange = (key: keyof ParamsState, value: number) => {
    setParams((prevParams) => ({
      ...prevParams,
      [key]: value,
    }));
  };

  return (
    <>
      <Header>
        <Logo src={ReonicLogo} alt="Reonic Logo" />
        EV Charging Simulator
      </Header>
      <AppContainer>
        <InputParameters params={params} onInputChange={handleInputChange} />
        <OutputVisualization
          chargingData={chargingData}
          exemplaryDayData={exemplaryDayData}
          totalEnergyConsumed={totalEnergyConsumed}
          theoreticalMaxPower={theoreticalMaxPower}
          chargingEvents={chargingEvents}
        />
      </AppContainer>
      <Footer>Tong Yao 2024 @ Munich</Footer>
    </>
  );
};

export default App;
