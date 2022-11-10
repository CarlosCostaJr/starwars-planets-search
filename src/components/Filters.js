import React, { useContext } from 'react';
import RootContext from '../context/RootContext';
import '../styles/Filters.css';

function Filters() {
  const {
    // planets,
    filterByName,
    setFilterByName,
    setColumnFilter,
    setComparisonFilter,
    setValueFilter,
  } = useContext(RootContext);

  const handleChangeSearch = ({ target }) => {
    setFilterByName({ [target.name]: target.value });
  };

  const handleColumnFilter = ({ target }) => {
    setColumnFilter(target.value);
  };

  const handleComparisonFilter = ({ target }) => {
    setComparisonFilter(target.value);
  };

  const handleValueFilter = ({ target }) => {
    setValueFilter(target.value);
  };

  return (
    <div className="filters">
      <label htmlFor="search" className="filters-element">
        Pesquisar:
        <input
          id="search"
          type="text"
          placeholder="Digite o nome do planeta"
          name="name"
          value={ filterByName.name }
          onChange={ handleChangeSearch }
          data-testid="name-filter"
        />
      </label>

      <label htmlFor="column_filter" className="filters-element">
        Coluna:
        <select
          id="column_filter"
          name="column"
          data-testid="column-filter"
          onChange={ handleColumnFilter }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label className="filters-element" htmlFor="comparison">
        Operador:
        <select
          id="comparison"
          name="comparison"
          onChange={ handleComparisonFilter }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value">
        <input
          className="filters-element"
          type="number"
          placeholder="valor"
          name="value"
          onChange={ handleValueFilter }
          data-testid="value-filter"
        />
      </label>

      <button
        className="filters-element"
        type="button"
        data-testid="button-filter"
        onClick={ null }
      >
        Filtrar
      </button>

    </div>
  );
}

export default Filters;
