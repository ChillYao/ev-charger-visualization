import React from 'react';
import { ExemplaryDayData } from '../OutputVisualization.types';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { Section, SectionTitle } from '../OutputVisualization.styles';

export interface Props {
  exemplaryDayData: ExemplaryDayData[];
}

export const TimeSection: React.FC<Props> = (props) => {
  const { exemplaryDayData } = props;
  return (
    <Section>
      <SectionTitle>Actual hourly power supply (kW)</SectionTitle>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={exemplaryDayData}>
          <XAxis dataKey='time' />
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey='value' stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
    </Section>
  );
};
