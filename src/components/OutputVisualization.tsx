// components/OutputVisualization.tsx
import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import BatteryVisualization from "../widgets/BatteryVisualization";

const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
  color: #333;
`;

interface OutputProps {
  totalEnergyConsumed: number;
  theoreticalMaxPower: number;
  chargingEvents: number[]; // [yearly, monthly, weekly, daily]
  chargingData: { name: string; value: number }[];
  exemplaryDayData: { time: string; value: number }[];
}

export const OutputVisualization: React.FC<OutputProps> = ({
  totalEnergyConsumed,
  theoreticalMaxPower,
  chargingEvents,
  chargingData,
  exemplaryDayData,
}) => {
  const chartData = [
    { name: "Yearly", events: chargingEvents[0] },
    { name: "Monthly", events: chargingEvents[1] },
    { name: "Weekly", events: chargingEvents[2] },
    { name: "Daily", events: chargingEvents[3] },
  ];

  return (
    <OutputContainer>
      <h3>Total Energy Consumed: {totalEnergyConsumed} kWh</h3>
      <h3>Theoretical Maximum Power: {theoreticalMaxPower} kWh</h3>
      <BatteryVisualization
        totalEnergyConsumed={totalEnergyConsumed}
        theoreticalMaxPower={theoreticalMaxPower}
      />
      {/* Charging Values per Chargepoint (kW) */}
      <SectionTitle>
        Actual Average Charging Speed per Chargepoint (kW) in Hour (60mins)
      </SectionTitle>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chargingData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      {/* Exemplary Day Charging Behavior */}
      <SectionTitle>Actual hourly power supply (kW)</SectionTitle>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={exemplaryDayData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      <ChartWrapper>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="events" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </OutputContainer>
  );
};
