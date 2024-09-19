export const generateChargingData = (
  numChargepoints: number,
  chargePower: number
) => {
  const chargingData = [];
  for (let i = 1; i <= numChargepoints; i++) {
    const value = Math.random() * chargePower;
    chargingData.push({ name: `P${i}`, value: Math.round(value * 100) / 100 });
  }
  return chargingData;
};
