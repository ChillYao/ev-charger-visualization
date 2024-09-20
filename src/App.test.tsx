import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('<App/>', () => {
  test('renders the application', () => {
    render(<App />);
    const logo = screen.getByAltText('Reonic Logo');
    const title = screen.getByText('EV Charging Simulator');
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('renders the EvVisualization component', () => {
    render(<App />);
    const evVisualization = screen.getByLabelText('presentation');
    expect(evVisualization).toBeInTheDocument();
  });

  test('renders the footer with author information', () => {
    render(<App />);
    const footer = screen.getByText('Tong Yao 2024 @ Munich');
    expect(footer).toBeInTheDocument();
  });
});
