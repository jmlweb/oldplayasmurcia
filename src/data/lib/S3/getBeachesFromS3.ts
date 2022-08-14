import { BeachesMap } from '@/types';

import getFromS3 from './getFromS3';

let cachedPromise: Promise<BeachesMap>;

const getBeachesFromS3 = () => {
  if (!cachedPromise) {
    cachedPromise = getFromS3<BeachesMap>('beaches.json');
  }
  return cachedPromise;
};

export default getBeachesFromS3;
