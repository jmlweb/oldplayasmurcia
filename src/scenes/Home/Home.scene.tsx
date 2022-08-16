import Head from 'next/head';

import BeachesGrid from '@/components/BeachesGrid/BeachesGrid';
import { NextPageWithLayout } from '@/types';

import { PropsContextValue, PropsProvider } from './context';

const Home: NextPageWithLayout<PropsContextValue> = ({
  accesibleBeaches,
  featuredBeaches,
}) => (
  <>
    <Head>
      <title>Playas Murcia</title>
      <meta
        name="description"
        content="Listado de playas de la Región de Murcia"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PropsProvider
      accesibleBeaches={accesibleBeaches}
      featuredBeaches={featuredBeaches}
    >
      <BeachesGrid title="Playas destacadas" items={featuredBeaches} />
      <BeachesGrid title="Playas accesibles" items={accesibleBeaches} />
    </PropsProvider>
  </>
);

export default Home;
