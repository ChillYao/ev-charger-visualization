import { render, screen } from "@testing-library/react";
import { SummarySection } from "./SummarySection";

describe("SummarySection", () => {
  const totalEnergyConsumed = 500;
  const theoreticalMaxPower = 1000;

  test("renders the total energy consumed", () => {
    render(
      <SummarySection
        totalEnergyConsumed={totalEnergyConsumed}
        theoreticalMaxPower={theoreticalMaxPower}
      />
    );
    expect(
      screen.getByText(`Total Energy Consumed: ${totalEnergyConsumed} kWh`)
    ).toBeInTheDocument();
  });

  test("renders the theoretical maximum power", () => {
    render(
      <SummarySection
        totalEnergyConsumed={totalEnergyConsumed}
        theoreticalMaxPower={theoreticalMaxPower}
      />
    );
    expect(
      screen.getByText(`Theoretical Maximum Power: ${theoreticalMaxPower} kWh`)
    ).toBeInTheDocument();
  });

  test("renders the correct consumption rate", () => {
    const consumptionRate = (
      (totalEnergyConsumed / theoreticalMaxPower) *
      100
    ).toFixed(2);
    render(
      <SummarySection
        totalEnergyConsumed={totalEnergyConsumed}
        theoreticalMaxPower={theoreticalMaxPower}
      />
    );
    expect(
      screen.getByText(`Consumption Rate: ${consumptionRate} %`)
    ).toBeInTheDocument();
    expect(screen.getByText(`${consumptionRate}%`)).toBeInTheDocument();
  });
});
