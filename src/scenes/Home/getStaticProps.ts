import { GetStaticProps } from 'next';

import {
  getAccesibleBeaches,
  getBeachesWithPromenade,
  getFeaturedBeaches,
  getNudistBeaches,
} from '@/data';
import { BeachesList } from '@/types';

export interface Props {
  accesibleBeaches: BeachesList;
  featuredBeaches: BeachesList;
  beachesWithPromenade: BeachesList;
  nudistBeaches: BeachesList;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [
    accesibleBeaches,
    beachesWithPromenade,
    featuredBeaches,
    nudistBeaches,
  ] = await Promise.all([
    getAccesibleBeaches(),
    getBeachesWithPromenade(),
    getFeaturedBeaches(),
    getNudistBeaches(),
  ]);
  return {
    props: {
      accesibleBeaches,
      beachesWithPromenade,
      featuredBeaches,
      nudistBeaches,
    },
    revalidate: 12 * 60 * 60,
  };
};
