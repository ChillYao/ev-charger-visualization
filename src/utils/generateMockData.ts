import { estimateChargingEvents } from "./estimateChargingEvents";
import { generateChargingData } from "./generateChargingData";
import { generateExemplaryDayData } from "./generateExemplaryDayData";
import { calculateTheoreticalMaxPower } from "./calculateTheoreticalMaxPower";

export const generateMockData = (
  numChargepoints: number,
  arrivalMultiplier: number,
  carConsumption: number,
  chargePower: number
) => {
  // Mock state for output values (replace with real data later)
  const chargingEvents = estimateChargingEvents(
    numChargepoints,
    arrivalMultiplier,
    carConsumption,
    chargePower
  );

  // Mock data for charging values per chargepoint (kW)
  const chargingData = generateChargingData(numChargepoints, chargePower);

  // Mock data for exemplary day's charging behavior (kW at 15-min intervals)
  const { exemplaryDayData, totalEnergyConsumed } = generateExemplaryDayData(
    numChargepoints,
    arrivalMultiplier,
    carConsumption,
    chargePower
  );

  // Calculate theoretical maximum power
  const theoreticalMaxPower = calculateTheoreticalMaxPower(
    numChargepoints,
    chargePower
  );
  return {
    chargingData,
    exemplaryDayData,
    totalEnergyConsumed,
    theoreticalMaxPower,
    chargingEvents,
  };
};
