/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
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

  const globalContext = {
    planets,
  };

  return (
    <RootContext.Provider value={ globalContext }>
      {children}
    </RootContext.Provider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootProvider;
