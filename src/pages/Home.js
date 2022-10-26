import React from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import Table from '../components/table';

function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Filters />
          <Table />
        </section>
      </main>
    </>
  );
}

export default Home;
