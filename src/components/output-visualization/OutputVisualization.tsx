import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import {
  OutputContainer,
  Section,
  SectionTitle,
  Table,
  TableHeader,
  TableCell,
} from "./OutputVisualization.styles";
import { OutputProps } from "./OutputVisualization.types";
import { SummarySection } from "./summary-section/SummarySection";

export const OutputVisualization: React.FC<OutputProps> = ({
  totalEnergyConsumed,
  theoreticalMaxPower,
  chargingEvents,
  chargingData,
  exemplaryDayData,
}) => {
  const doughnutData = [
    { name: "Consumed", value: totalEnergyConsumed },
    { name: "Remaining", value: theoreticalMaxPower - totalEnergyConsumed },
  ];

  const consumptionRate = (
    (totalEnergyConsumed / theoreticalMaxPower) *
    100
  ).toFixed(2);

  return (
    <OutputContainer>
      <SummarySection
        totalEnergyConsumed={totalEnergyConsumed}
        theoreticalMaxPower={theoreticalMaxPower}
        consumptionRate={consumptionRate}
        doughnutData={doughnutData}
      />
      {/* Charging Values per Chargepoint (kW) */}
      <Section>
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
      </Section>

      {/* Exemplary Day Charging Behavior */}
      <Section>
        <SectionTitle>Actual hourly power supply (kW)</SectionTitle>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={exemplaryDayData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Section>

      {/* Charging Events Table */}
      <Section>
        <SectionTitle>Estimated Charging Events</SectionTitle>
        <Table>
          <thead>
            <tr>
              <TableHeader>Yearly</TableHeader>
              <TableHeader>Monthly</TableHeader>
              <TableHeader>Weekly</TableHeader>
              <TableHeader>Daily</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>{chargingEvents[0]}</TableCell>
              <TableCell>{chargingEvents[1]}</TableCell>
              <TableCell>{chargingEvents[2]}</TableCell>
              <TableCell>{chargingEvents[3]}</TableCell>
            </tr>
          </tbody>
        </Table>
      </Section>
    </OutputContainer>
  );
};
