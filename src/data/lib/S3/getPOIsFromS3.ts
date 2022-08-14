import { POIs } from '@/types';

import getFromS3 from './getFromS3';

let cachedPromises: Record<string, Promise<POIs>> = {};

const getPOIsFromS3 = (key: string) => {
  if (!cachedPromises[key]) {
    cachedPromises[key] = getFromS3<POIs>(`/pois/${key}.json`);
  }
  return cachedPromises[key];
};

export default getPOIsFromS3;
