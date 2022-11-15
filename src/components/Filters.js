import React, { useContext } from 'react';
import RootContext from '../context/RootContext';
import '../styles/Filters.css';

function Filters() {
  const {
    removeAllFilters,
    columnFilter,
    comparisonFilter,
    valueFilter,
    setFilterByName,
    setColumnFilter,
    setComparisonFilter,
    setValueFilter,
    filterApplyed,
    setFilterApplyed,
    availableFilterOptions,
    setAvailableFilterOptions,
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

  const apllyFilter = () => {
    const newOptions = availableFilterOptions.filter((option) => option !== columnFilter);
    setAvailableFilterOptions(newOptions);

    setFilterApplyed([...filterApplyed, {
      columnFilter,
      comparisonFilter,
      valueFilter,
    }]);
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
          {availableFilterOptions
            .map(
              (option, index) => <option key={ index } value={ option }>{option}</option>,
            )}
        </select>
      </label>

      <label className="filters-element" htmlFor="comparison">
        Operador:
        <select
          id="comparison"
          name="comparison"
          value={ comparisonFilter }
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
          min={ 0 }
          placeholder={ 0 }
          name="value"
          value={ valueFilter }
          onChange={ handleValueFilter }
          data-testid="value-filter"
        />
      </label>

      <button
        className="filters-element"
        type="button"
        data-testid="button-filter"
        onClick={ apllyFilter }
      >
        Filtrar
      </button>

      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover Filtros
      </button>

    </div>
  );
}

export default Filters;
