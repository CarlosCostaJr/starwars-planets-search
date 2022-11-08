import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import RootContext from './RootContext';
import getPlanets from '../services/apiRequest';

function RootProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  console.log(filterByName);

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
  }), [planets, filterByName, filteredPlanets]);

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
