import React, { useContext } from 'react';
import RootContext from '../context/RootContext';
import '../styles/apllyedFiltes.css';

function ApllyedFilters() {
  const {
    filterApplyed,
    setFilterApplyed,
  } = useContext(RootContext);

  const removeFilter = (index) => {
    console.log(index);
    const newFilter = filterApplyed.filter((filter) => (
      filter !== filterApplyed[index]));
    setFilterApplyed(newFilter);
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
