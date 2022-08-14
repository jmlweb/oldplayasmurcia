import { Beach } from '@/types';

import getOriginalBeaches from './getOriginalBeaches';

const beachDetailsPromises: Record<string, Promise<Beach> | null> = {};

const getBeachDetail = (slug: string) => {
  if (!beachDetailsPromises[slug]) {
    beachDetailsPromises[slug] = getOriginalBeaches()
      .then((beaches) => beaches.find((beach) => beach.slug === slug))
      .then((beach) => {
        if (!beach) {
          throw new Error('No beach found for the slug provided');
        }
        return beach;
      })
      .catch((e) => {
        beachDetailsPromises[slug] = null;
        return e;
      });
  }
  return beachDetailsPromises[slug];
};

export default getBeachDetail;
