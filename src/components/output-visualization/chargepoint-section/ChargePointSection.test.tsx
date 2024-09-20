import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ChargePointSection } from './ChargePointSection';
import { ChargingData } from '../OutputVisualization.types';

describe('<ChargePointSection />', () => {
  const mockChargingData: ChargingData[] = [
    { name: '00:00', value: 10 },
    { name: '01:00', value: 15 },
    { name: '02:00', value: 20 },
  ];

  test('renders the chargepoint section', () => {
    render(<ChargePointSection chargingData={mockChargingData} />);
    expect(
      screen.getByText(
        /Actual Average Charging Speed per Chargepoint \(kW\) in Hour \(60mins\)/
      )
    ).toBeInTheDocument();
  });
});
