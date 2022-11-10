import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import RootContext from './RootContext';
import getPlanets from '../services/apiRequest';

function RootProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');

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

  const globalState = useMemo(() => ({
    planets,
    setPlanets,
    filterByName,
    setFilterByName,
    filteredPlanets,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
  }), [
    planets,
    filterByName,
    filteredPlanets,
    columnFilter,
    comparisonFilter,
    valueFilter,
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
