import { SimpleBeach } from '@/types';

import queryBeaches from './lib/queryBeaches';

let cachedPromise: Promise<ReadonlyArray<SimpleBeach>>;

const getFeaturedBeaches = () => {
  if (!cachedPromise) {
    cachedPromise = queryBeaches({
      filter: ({ blueFlag, pics }) => blueFlag && pics.length > 2,
      sort: (a, b) => {
        if (a.accesible && !b.accesible) {
          return -1;
        }
        if (!a.accesible && b.accesible) {
          return 1;
        }
        if (a.promenade && !b.promenade) {
          return -1;
        }
        if (!a.promenade && b.promenade) {
          return 1;
        }
        return Math.random() >= 0.5 ? 1 : -1;
      },
      limit: 10,
    });
  }
  return cachedPromise;
};

export default getFeaturedBeaches;
