import { render, screen, fireEvent } from "@testing-library/react";
import { EvVisualization } from "./EvVisualization";
import { generateMockData } from "../utils/generateMockData";
import { vi, Mock } from "vitest";

// Mock the generateMockData function
vi.mock("../utils/generateMockData");

describe("EvVisualization", () => {
  const mockData = {
    chargingData: [
      { chargePointId: "CP1", value: 50 },
      { chargePointId: "CP2", value: 60 },
    ],
    exemplaryDayData: [
      { time: "0:00", value: 10 },
      { time: "1:00", value: 20 },
      { time: "2:00", value: 30 },
    ],
    totalEnergyConsumed: 500,
    theoreticalMaxPower: 1000,
    chargingEvents: [3650, 300, 70, 10],
  };

  beforeEach(() => {
    (generateMockData as Mock).mockReturnValue(mockData);
  });

  test("renders the InputParameters and OutputVisualization components", () => {
    render(<EvVisualization />);
    expect(screen.getByLabelText("presentation")).toBeInTheDocument();
    expect(
      screen.getByText("Total Energy Consumed: 500 kWh")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Theoretical Maximum Power: 1000 kWh")
    ).toBeInTheDocument();
  });

  test("updates state when input parameters change", () => {
    render(<EvVisualization />);
    const input = screen.getByLabelText(/Number of Chargepoints:/);
    fireEvent.change(input, { target: { value: "30" } });
    expect(generateMockData).toHaveBeenCalledWith(30, 11, 100, 18);
  });
});
