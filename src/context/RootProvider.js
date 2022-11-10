import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import RootContext from './RootContext';
import getPlanets from '../services/apiRequest';

function RootProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [valueFilter, setValueFilter] = useState('0');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [applyFilterBtn, setApplyFilterBtn] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      const resultPlanets = await getPlanets();
      setPlanets([...resultPlanets]);
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
      if (applyFilterBtn) {
        switch (comparisonFilter) {
        case 'menor que':
          setFilteredPlanets([
            ...planets.filter((planet) => Number(planet[columnFilter]) < valueFilter)]);
          break;
        case 'igual a':
          setFilteredPlanets([
            ...planets.filter((planet) => Number(planet[columnFilter]) === valueFilter)]);
          break;
        default:
          setFilteredPlanets([
            ...planets.filter((planet) => Number(planet[columnFilter]) > valueFilter)]);
          break;
        }
      }
      setApplyFilterBtn(false);
    };
    filterPlanetsName();
  }, [planets, valueFilter, columnFilter, applyFilterBtn, comparisonFilter]);

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
    applyFilterBtn,
    setApplyFilterBtn,
  }), [
    planets,
    filterByName,
    filteredPlanets,
    columnFilter,
    comparisonFilter,
    valueFilter,
    applyFilterBtn,
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
