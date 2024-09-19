export const estimateChargingEvents = (
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
