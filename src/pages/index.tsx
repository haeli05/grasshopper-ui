import type { NextPage } from 'next';
import Head from 'next/head';

import Home from '../views/Home';

const Index: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Havana.ag</title>
        <meta
          name="description"
          content="Next-gen Dex Aggregator"
        />
      </Head>
      <Home />
    </div>
  );
};

export default Index;
