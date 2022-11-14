import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Testa se ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
});
