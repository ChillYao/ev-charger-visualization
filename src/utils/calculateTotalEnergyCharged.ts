export const calculateTotalEnergyCharged = (
  exemplaryDayData: {
    time: string;
    value: number;
  }[]
) => {
  return exemplaryDayData.reduce((total, entry) => total + entry.value, 0);
};
