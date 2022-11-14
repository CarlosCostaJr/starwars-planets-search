import React, { useContext } from 'react';
import RootContext from '../context/RootContext';
import '../styles/apllyedFiltes.css';

function ApllyedFilters() {
  const {
    filterApplyed,
    setFilterApplyed,
    removeAllFilters,
  } = useContext(RootContext);

  const removeFilter = (index) => {
    console.log(filterApplyed.length);
    const newFilter = filterApplyed.filter((filter) => (
      filter !== filterApplyed[index]));
    setFilterApplyed(newFilter);
    if (filterApplyed.length === 1) removeAllFilters();
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
            <div>
              <span>{`${columnFilter} ${comparisonFilter} ${valueFilter}`}</span>
            </div>
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
