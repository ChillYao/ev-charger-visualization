import React from "react";

import { Section, SectionTitle } from "../OutputVisualization.styles";
import { Table, TableHeader, TableCell } from "./EventSection.styles";

export interface Props {
  chargingEvents: number[];
}

export const EventSection: React.FC<Props> = (props) => {
  const { chargingEvents } = props;
  return (
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
  );
};
