import React, { useContext } from 'react';
import RootContext from '../context/RootContext';
import '../styles/apllyedFiltes.css';

function ApllyedFilters() {
  const {
    filterApplyed,
    setFilterApplyed,
    filteredHistory,
    setFilteredPlanets,
    // removeAllFilters,
  } = useContext(RootContext);

  const removeFilter = ({ target }) => {
    const { name } = target;
    const newFilter = filterApplyed.filter((filter) => (
      filter !== filterApplyed[name]));
    setFilterApplyed(newFilter);
    const exclude = 3;
    const newFilterHander = filteredHistory.slice(exclude);
    setFilteredPlanets(newFilterHander[name]);
    // if (filterApplyed.length === 1) removeAllFilters();
  };

  return (
    <div>
      <ul className="applyed-Filtes">
        {filterApplyed.map(({
          columnFilter,
          comparisonFilter,
          valueFilter,
        }, index) => (
          <li
            key={ index }
            data-testid="filter"
          >
            <span>{`${columnFilter} ${comparisonFilter} ${valueFilter}`}</span>
            <button
              type="button"
              id="delete-filter-btn"
              name={ index }
              onClick={ removeFilter }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ApllyedFilters;
