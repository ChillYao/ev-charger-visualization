// components/OutputVisualization.tsx
import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
// import BatteryVisualization from "../widgets/BatteryVisualization";

const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
  color: #333;
`;

const DoughnutChartWrapper = styled.div`
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`;

const DoughnutChartLabel = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf50;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  background-color: #f2f2f2;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

const Section = styled.section`
  padding: 1rem 0;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
`;

const InfoChartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const EnergyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface OutputProps {
  totalEnergyConsumed: number;
  theoreticalMaxPower: number;
  chargingEvents: number[]; // [yearly, monthly, weekly, daily]
  chargingData: { name: string; value: number }[];
  exemplaryDayData: { time: string; value: number }[];
}

const COLORS = ["#d3d3d3", "#82ca9d"];

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
      <Section>
        <InfoChartWrapper>
          <EnergyInfoWrapper>
            <h3>Total Energy Consumed: {totalEnergyConsumed} kWh</h3>
            <h3>Theoretical Maximum Power: {theoreticalMaxPower} kWh</h3>
            <h3>Consumption Rate: {consumptionRate} %</h3>
          </EnergyInfoWrapper>
          <DoughnutChartWrapper>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={doughnutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {doughnutData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <DoughnutChartLabel>{consumptionRate}%</DoughnutChartLabel>
          </DoughnutChartWrapper>
        </InfoChartWrapper>
      </Section>

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
