import React from 'react';
import {
  Section,
  InfoChartWrapper,
  KeyInfoWrapper,
  DoughnutChartWrapper,
  DoughnutChartLabel,
} from '../OutputVisualization.styles';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface Props {
  totalEnergyConsumed: number;
  theoreticalMaxPower: number;
}

const COLORS = ['#d3d3d3', '#82ca9d'];

export const SummarySection: React.FC<Props> = (props) => {
  const { totalEnergyConsumed, theoreticalMaxPower } = props;
  const doughnutData = [
    { name: 'Consumed', value: totalEnergyConsumed },
    { name: 'Remaining', value: theoreticalMaxPower - totalEnergyConsumed },
  ];

  const consumptionRate = (
    (totalEnergyConsumed / theoreticalMaxPower) *
    100
  ).toFixed(2);
  return (
    <Section>
      <InfoChartWrapper>
        <KeyInfoWrapper>
          <h3>Total Energy Consumed: {totalEnergyConsumed} kWh</h3>
          <h3>Theoretical Maximum Power: {theoreticalMaxPower} kWh</h3>
          <h3>Consumption Rate: {consumptionRate} %</h3>
        </KeyInfoWrapper>
        <DoughnutChartWrapper>
          <ResponsiveContainer width='100%' height={200}>
            <PieChart>
              <Pie
                data={doughnutData}
                cx='50%'
                cy='50%'
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey='value'
              >
                {doughnutData.map((_entry, index) => (
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
  );
};
