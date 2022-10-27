import React from 'react';
import Home from './pages/Home';
import RootProvider from './context/RootProvider';
import './App.css';

function App() {
  return (
    <RootProvider>
      <Home />
    </RootProvider>
  );
}

export default App;
