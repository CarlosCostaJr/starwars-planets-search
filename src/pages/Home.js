import React from 'react';
// import Header from '../components/Header';
import Filters from '../components/Filters';
import ApllyedFilters from '../components/ApllyedFilters';
import Table from '../components/Table';

function Home() {
  return (
    <>
      <header>
        {/* <Header /> */}
      </header>
      <main>
        <section>
          <Filters />
          <ApllyedFilters />
          <Table />
        </section>
      </main>
    </>
  );
}

export default Home;
