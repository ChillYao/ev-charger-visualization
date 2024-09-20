import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { InputParameters } from './InputParameters';
import { InputProps } from './InputParameters.types';

describe('<InputParameters />', () => {
  const mockParams = {
    numChargepoints: 10,
    arrivalMultiplier: 50,
    carConsumption: 15,
    chargePower: 22,
  };

  const mockOnInputChange = vi.fn();

  const defaultProps: InputProps = {
    params: mockParams,
    onInputChange: mockOnInputChange,
  };

  test('renders with initial values', () => {
    render(<InputParameters {...defaultProps} />);

    expect(screen.getByText(/Number of Chargepoints: 10/)).toBeInTheDocument();
    expect(
      screen.getByText(/Arrival Probability Multiplier/)
    ).toBeInTheDocument();
    expect(screen.getByText(/50/)).toBeInTheDocument();
  });

  test('calls onInputChange when numChargepoints slider is changed', () => {
    render(<InputParameters {...defaultProps} />);

    const numChargepointsSlider = screen.getByLabelText(
      /Number of Chargepoints:/
    );
    fireEvent.change(numChargepointsSlider, { target: { value: '15' } });

    expect(mockOnInputChange).toHaveBeenCalledWith('numChargepoints', 15);
  });

  test('calls onInputChange when arrivalMultiplier slider is changed', () => {
    render(<InputParameters {...defaultProps} />);

    const arrivalMultiplierSlider = screen.getByLabelText(
      /Arrival Probability Multiplier/
    );
    fireEvent.change(arrivalMultiplierSlider, { target: { value: '60' } });

    expect(mockOnInputChange).toHaveBeenCalledWith('arrivalMultiplier', 60);
  });
});
