import React from 'react';
import Filters from '../components/Filters';
import ApllyedFilters from '../components/ApllyedFilters';
import Table from '../components/Table';

function Home() {
  return (
    <main>
      <section>
        <Filters />
        <ApllyedFilters />
        <Table />
      </section>
    </main>
  );
}

export default Home;
