import React, { useContext } from 'react';
import RootContext from '../context/RootContext';
import '../styles/apllyedFiltes.css';

function ApllyedFilters() {
  const {
    columnFilter,
    comparisonFilter,
    valueFilter,
  } = useContext(RootContext);

  return (
    <div>
      <ul className="applyed-Filtes">
        <li
          data-testid="filter"
          className="filters"
        >
          <span>{`${columnFilter} ${comparisonFilter} ${valueFilter}`}</span>
          <button
            className="applyed-button"
            type="button"
          >
            X
          </button>
        </li>
      </ul>
    </div>
  );
}
export default ApllyedFilters;
