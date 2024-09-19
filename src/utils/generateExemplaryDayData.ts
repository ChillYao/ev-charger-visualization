export const generateExemplaryDayData = (
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

  const totalEnergyConsumed = exemplaryDayData.reduce(
    (total, entry) => total + entry.value,
    0
  );

  return { exemplaryDayData, totalEnergyConsumed };
};
