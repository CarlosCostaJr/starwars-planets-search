import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import RootContext from './RootContext';
import getPlanets from '../services/apiRequest';

function RootProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterApplyed, setFilterApplyed] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  const INITIAL_FILTER_OPTIONS = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const [availableFilterOptions, setAvailableFilterOptions] = useState(
    INITIAL_FILTER_OPTIONS,
  );

  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('0');

  const removeAllFilters = () => {
    setFilterApplyed([]);
    setFilteredPlanets([...planets]);
    setAvailableFilterOptions(INITIAL_FILTER_OPTIONS);
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const resultPlanets = await getPlanets();
      setPlanets([...resultPlanets]);
      setFilteredPlanets([...resultPlanets]);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filterPlanetsName = () => {
      const searchresult = planets
        .filter((planet) => planet.name.toUpperCase()
          .includes(filterByName.name.toUpperCase()));
      setFilteredPlanets([...searchresult]);
    };

    filterPlanetsName();
  }, [filterByName, planets]);

  useEffect(() => {
    const filterPlanetsName = () => {
      filterApplyed.forEach((el) => {
        switch (el.comparisonFilter) {
        case 'menor que':
          setFilteredPlanets([
            ...filteredPlanets
              .filter((planet) => +planet[el.columnFilter] < +el.valueFilter)]);
          break;
        case 'igual a':
          setFilteredPlanets([
            ...filteredPlanets
              .filter((planet) => +planet[el.columnFilter] === +el.valueFilter)]);
          break;
        default:
          setFilteredPlanets([
            ...filteredPlanets
              .filter((planet) => +planet[el.columnFilter] > +el.valueFilter)]);
          break;
        }
      });
    };
    filterPlanetsName();
  }, [filterApplyed]);

  const globalState = useMemo(() => ({
    planets,
    valueFilter,
    filterByName,
    filteredPlanets,
    columnFilter,
    comparisonFilter,
    setPlanets,
    setFilterByName,
    setColumnFilter,
    setComparisonFilter,
    setValueFilter,
    filterApplyed,
    setFilterApplyed,
    availableFilterOptions,
    setAvailableFilterOptions,
    removeAllFilters,
  }), [
    planets,
    filterByName,
    filteredPlanets,
    columnFilter,
    comparisonFilter,
    valueFilter,
    filterApplyed,
    availableFilterOptions,
  ]);

  return (
    <RootContext.Provider value={ globalState }>
      {children}
    </RootContext.Provider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootProvider;
