import { GetStaticProps } from 'next';

import { getAccesibleBeaches, getFeaturedBeaches } from '@/data';

export const getStaticProps: GetStaticProps = async () => {
  const [accesibleBeaches, featuredBeaches] = await Promise.all([
    getAccesibleBeaches(),
    getFeaturedBeaches(),
  ]);
  return {
    props: {
      accesibleBeaches,
      featuredBeaches,
    },
  };
};
