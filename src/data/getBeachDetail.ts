import { BeachDetail, BeachesMap } from '@/types';

import { getBeachesFromS3, getPOIsFromS3 } from './lib/S3';

let cachedPromise: Promise<BeachDetail>;

const getBeachesList = (key: keyof BeachesMap) => {
  if (!cachedPromise) {
    cachedPromise = Promise.all([
      getBeachesFromS3().then((beachesMap) => beachesMap[key]),
      getPOIsFromS3(key),
    ]).then(([beach, pois]) => ({
      ...beach,
      pois,
    }));
  }
  return cachedPromise;
};

export default getBeachesList;
