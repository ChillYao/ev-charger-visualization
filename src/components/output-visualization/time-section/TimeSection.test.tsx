import { render, screen } from "@testing-library/react";
import { TimeSection } from "./TimeSection";
import { ExemplaryDayData } from "../OutputVisualization.types";

describe("<TimeSection />", () => {
  const exemplaryDayData: ExemplaryDayData[] = [
    { time: "0:00", value: 10 },
    { time: "1:00", value: 20 },
    { time: "2:00", value: 30 },
  ];

  test("renders the time section", () => {
    render(<TimeSection exemplaryDayData={exemplaryDayData} />);
    expect(
      screen.getByText("Actual hourly power supply (kW)")
    ).toBeInTheDocument();
  });
});
