import { SimpleBeach } from '@/types';

import getBeachesList from './getBeachesList';

let cachedPromise: Promise<ReadonlyArray<SimpleBeach>>;

const getAccesibleBeaches = () => {
  if (!cachedPromise) {
    cachedPromise = getBeachesList().then((beaches) =>
      beaches
        .filter(({ accesible }) => accesible)
        .sort((a, b) => {
          if (a.featuredPic && !b.featuredPic) {
            return -1;
          }
          if (!a.featuredPic && b.featuredPic) {
            return 1;
          }
          return Math.random() >= 0.5 ? 1 : -1;
        }),
    );
  }
  return cachedPromise;
};

export default getAccesibleBeaches;
