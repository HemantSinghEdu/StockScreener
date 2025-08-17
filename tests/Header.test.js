import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header with title', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Global Asset Screener/i);
  expect(titleElement).toBeInTheDocument();
});
