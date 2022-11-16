import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import data from './data';
import ApllyedFilters from '../components/ApllyedFilters';

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

  it('Verifica comportamento do botão "Remover Filtros"', async () => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({
          results: [...data],
        }),
      }));

    render(<App />);
    const removeBtn = screen.getByTestId('button-remove-filters');
    userEvent.click(removeBtn);
    expect(await screen.findByRole('table')).toBeInTheDocument();
  });

  it('Verifica comportamento do botão "Filtrar"', async () => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({
          results: [...data],
        }),
      }));

    render(<App />);

    const nameFilter = await screen.findByTestId('name-filter')
    const columnFilter = await screen.findByTestId('column-filter')
    const comparisonFilter = await screen.findByTestId('comparison-filter')
    const valueFilter = await screen.findByTestId('value-filter')
    const filterBtn = await screen.findByTestId('button-filter')

    userEvent.type(nameFilter, 'Kamino')
    expect(nameFilter).toHaveValue('Kamino');

    userEvent.type(valueFilter, '1');
    expect(valueFilter).toHaveValue(1);

    userEvent.selectOptions(columnFilter, 'population');
    expect(columnFilter).toHaveValue('population');

    userEvent.click(filterBtn);
    expect(await screen.findByRole('table')).toBeInTheDocument();

    userEvent.selectOptions(comparisonFilter, 'menor que')
    userEvent.click(filterBtn);
    expect(await screen.findByRole('table')).toBeInTheDocument();

    userEvent.selectOptions(comparisonFilter, 'igual a')
    userEvent.click(filterBtn);
    expect(await screen.findByRole('table')).toBeInTheDocument();
  });

  it('Verifica comportamento do botão "X"', async () => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({
          results: [...data],
        }),
      }));

    render(<App />);
    const filterBtn = await screen.findByTestId('button-filter');
    userEvent.click(filterBtn);
    expect(await screen.findByText("X")).toBeInTheDocument();

    const filterApplyed = await screen.findAllByTestId('filter');
    expect(filterApplyed.length).toEqual(1);
  });
});
