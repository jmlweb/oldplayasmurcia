import { SimpleBeach } from '@/types';

import getBeachesList from './getBeachesList';

let cachedPromise: Promise<ReadonlyArray<SimpleBeach>>;

const getFeaturedBeaches = () => {
  if (!cachedPromise) {
    cachedPromise = getBeachesList().then((beaches) =>
      beaches
        .filter(({ blueFlag, featuredPic }) => blueFlag && featuredPic)
        .sort((a, b) => {
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
        }),
    );
  }
  return cachedPromise;
};

export default getFeaturedBeaches;
