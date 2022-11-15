import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';
import App from '../App';
import data from './data';

describe('cobertura da Api', () => {
  it('mocking API', async () => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({
          results: [...data],
        }),
      }));

    render(<App />);
    expect(await screen.findByText('Tatooine')).toBeInTheDocument();
  });

  it('verifica se tabela é renderizada', async () => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({
          results: [...data],
        }),
      }));

    render(<App />);
    expect(await screen.findByRole('table')).toBeInTheDocument();
  });

  it('Verifica se elementos com id são rederizados', async () => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({
          results: [...data],
        }),
      }));

    render(<App />);
    expect(await screen.findByTestId('name-filter')).toBeInTheDocument();
    expect(await screen.findByTestId('column-filter')).toBeInTheDocument();
    expect(await screen.findByTestId('comparison-filter')).toBeInTheDocument();
    expect(await screen.findByTestId('value-filter')).toBeInTheDocument();
    expect(await screen.findByTestId('button-filter')).toBeInTheDocument();
    expect(await screen.findByTestId('button-remove-filters')).toBeInTheDocument();
  });
});
