import React from 'react';
import { OutputContainer } from './OutputVisualization.styles';
import { OutputProps } from './OutputVisualization.types';
import { SummarySection } from './summary-section/SummarySection';
import { ChargePointSection } from './chargepoint-section/ChargePointSection';
import { TimeSection } from './time-section/TimeSection';
import { EventSection } from './event-section/EventSection';

export const OutputVisualization: React.FC<OutputProps> = ({
  totalEnergyConsumed,
  theoreticalMaxPower,
  chargingEvents,
  chargingData,
  exemplaryDayData,
}) => {
  return (
    <OutputContainer>
      <SummarySection
        totalEnergyConsumed={totalEnergyConsumed}
        theoreticalMaxPower={theoreticalMaxPower}
      />
      {/* Charging Values per Chargepoint (kW) */}
      <ChargePointSection chargingData={chargingData} />

      {/* Exemplary Day Charging Behavior */}
      <TimeSection exemplaryDayData={exemplaryDayData} />

      {/* Charging Events Table */}
      <EventSection chargingEvents={chargingEvents} />
    </OutputContainer>
  );
};
