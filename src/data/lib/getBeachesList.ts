import { Beaches } from '@/types';

import { getBeachesFromS3 } from './S3';

let cachedPromise: Promise<Beaches>;

const getBeachesList = async () => {
  if (!cachedPromise) {
    cachedPromise = getBeachesFromS3().then(Object.values);
  }
  return cachedPromise;
};

export default getBeachesList;
