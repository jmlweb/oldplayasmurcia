import Head from 'next/head';

import BeachesScroll from '@/components/BeachesScroll';
import { NextPageWithLayout } from '@/types';

import { Props } from './getStaticProps';

const Home: NextPageWithLayout<Props> = ({
  accesibleBeaches,
  beachesWithPromenade,
  featuredBeaches,
  nudistBeaches,
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
    <BeachesScroll title="Playas destacadas" items={featuredBeaches} />
    <BeachesScroll title="Playas accesibles" items={accesibleBeaches} />
    <BeachesScroll title="Playas nudistas" items={nudistBeaches} />
    <BeachesScroll title="Playas para pasear" items={beachesWithPromenade} />
  </>
);

export default Home;
