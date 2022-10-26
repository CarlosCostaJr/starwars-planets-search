import React from 'react';
import Home from './pages/Home';
// import rootProvider from './context/rootProvider';
import './App.css';

function App() {
  return (
    <rootProvider>
      <Home />
    </rootProvider>
  );
}

export default App;
