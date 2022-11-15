import React, { useContext } from 'react';
import RootContext from '../context/RootContext';
import '../styles/apllyedFiltes.css';

function ApllyedFilters() {
  const {
    filterApplyed,
    setFilterApplyed,
    // removeAllFilters,
    filteredHistory,
    setFilteredPlanets,
  } = useContext(RootContext);

  const removeFilter = (index) => {
    const newFilter = filterApplyed.filter((filter) => (
      filter !== filterApplyed[index]));
    setFilterApplyed(newFilter);
    const exclude = 3;
    const newFilterHander = filteredHistory.slice(exclude);
    setFilteredPlanets(newFilterHander[index]);
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
              id={ null }
              onClick={ () => removeFilter(index) }
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
