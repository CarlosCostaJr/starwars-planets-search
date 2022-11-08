import React, { useContext } from 'react';
import RootContext from '../context/RootContext';

function Filters() {
  const {
    filterByName,
    setFilterByName,
  } = useContext(RootContext);

  const handleChangeSearch = ({ target }) => {
    setFilterByName({ [target.name]: target.value });
  };

  return (

    <div className="search">
      <input
        type="text"
        placeholder="Digite o nome do planeta"
        name="name"
        value={ filterByName.name }
        onChange={ handleChangeSearch }
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filters;
