import { SimpleBeach } from '@/types';

import defaultSort from './lib/defaultSort';
import queryBeaches from './lib/queryBeaches';

let cachedPromise: Promise<ReadonlyArray<SimpleBeach>>;

const getNudistBeaches = () => {
  if (!cachedPromise) {
    cachedPromise = queryBeaches({
      filter: ({ nudist }) => nudist,
      sort: defaultSort,
      limit: 10,
    });
  }
  return cachedPromise;
};

export default getNudistBeaches;
