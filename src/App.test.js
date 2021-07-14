import { render, screen } from '@testing-library/react';
import Earth from './Planets/Earth';

test('renders learn react link', () => {
  render(<Earth />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
