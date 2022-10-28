import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import RootContext from './RootContext';
import getPlanets from '../services/apiRequest';

function RootProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const resultPlanets = await getPlanets();
      setPlanets([...resultPlanets]);
    };
    fetchPlanets();
  }, []);

  const globalState = useMemo(() => ({
    planets,
    setPlanets,
  }), [planets]);

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
