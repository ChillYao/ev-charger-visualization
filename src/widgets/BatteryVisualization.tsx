import React from 'react';
import styled from 'styled-components';

const BatteryContainer = styled.div`
  width: 20rem;
  height: 10rem;
  border: 0.2rem solid #333;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align items to the start (left) */
  background-color: #f9f9f9;
`;

const BatteryLevel = styled.div<{ percentage: number }>`
  height: 100%;
  background-color: ${({ percentage }) => (percentage > 20 ? '#4caf50' : '#f44336')};
  transition: width 0.5s ease-in-out;
  width: ${({ percentage }) => percentage}%;
`;

const BatteryCap = styled.div`
  width: 2rem;
  height: 4rem;
  background-color: #333;
  position: absolute;
  top: 3rem;
  right: -2.2rem;
  border-radius: 0.2rem;
`;

interface BatteryVisualizationProps {
  totalEnergyConsumed: number;
  theoreticalMaxPower: number;
}

const BatteryVisualization: React.FC<BatteryVisualizationProps> = ({ totalEnergyConsumed, theoreticalMaxPower }) => {
  const percentage = 100 - (totalEnergyConsumed / theoreticalMaxPower) * 100;

  return (
    <BatteryContainer>
      <BatteryLevel percentage={percentage} />
      <BatteryCap />
    </BatteryContainer>
  );
};

export default BatteryVisualization;