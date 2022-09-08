import { SimpleBeach } from '@/types';

import defaultSort from './lib/defaultSort';
import queryBeaches from './lib/queryBeaches';

let cachedPromise: Promise<ReadonlyArray<SimpleBeach>>;

const getBeachesWithPromenade = () => {
  if (!cachedPromise) {
    cachedPromise = queryBeaches({
      filter: ({ promenade }) => promenade,
      sort: defaultSort,
      limit: 10,
    });
  }
  return cachedPromise;
};

export default getBeachesWithPromenade;
