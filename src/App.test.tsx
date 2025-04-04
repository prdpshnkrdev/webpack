import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home page link', () => {
  render(<App />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});
