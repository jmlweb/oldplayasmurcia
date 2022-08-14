import Head from 'next/head';

import { NextPageWithLayout } from '@/types';

const Home: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Playas Murcia</title>
      <meta
        name="description"
        content="Listado de playas de la Región de Murcia"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>PlayasMurcia</h1>
  </>
);

export default Home;
