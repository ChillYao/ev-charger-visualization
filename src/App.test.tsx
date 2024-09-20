import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';

import App from './App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    expect(screen.getByText('EV Charging Simulator')).toBeInTheDocument();
  });
});
