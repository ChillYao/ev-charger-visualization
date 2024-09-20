import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { Section, SectionTitle } from '../OutputVisualization.styles';
import { ChargingData } from '../OutputVisualization.types';

export interface Props {
  chargingData: ChargingData[];
}

export const ChargePointSection: React.FC<Props> = (props) => {
  const { chargingData } = props;
  return (
    <Section>
      <SectionTitle>
        Actual Average Charging Speed per Chargepoint (kW) in Hour (60mins)
      </SectionTitle>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={chargingData}>
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='value' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </Section>
  );
};
