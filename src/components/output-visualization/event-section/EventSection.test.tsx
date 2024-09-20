import { render, screen } from "@testing-library/react";
import { EventSection } from "./EventSection";

describe("EventSection", () => {
  const chargingEvents = [3650, 300, 70, 10];

  test("renders the section title", () => {
    render(<EventSection chargingEvents={chargingEvents} />);
    expect(screen.getByText("Estimated Charging Events")).toBeInTheDocument();
  });

  test("renders the table headers", () => {
    render(<EventSection chargingEvents={chargingEvents} />);
    expect(screen.getByText("Yearly")).toBeInTheDocument();
    expect(screen.getByText("Monthly")).toBeInTheDocument();
    expect(screen.getByText("Weekly")).toBeInTheDocument();
    expect(screen.getByText("Daily")).toBeInTheDocument();
  });

  test("renders the correct charging events", () => {
    render(<EventSection chargingEvents={chargingEvents} />);
    expect(screen.getByText("3650")).toBeInTheDocument();
    expect(screen.getByText("300")).toBeInTheDocument();
    expect(screen.getByText("70")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
