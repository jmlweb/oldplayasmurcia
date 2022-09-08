import { BeachDetail, BeachesMap } from '@/types';

import getParsedImage from './lib/getParsedImage';
import { getBeachesFromS3, getPOIsFromS3 } from './lib/S3';

let cachedPromise: Record<keyof BeachesMap, Promise<BeachDetail>> = {};

const getParsedBeach = async (key: keyof BeachesMap) => {
  const beachesMap = await getBeachesFromS3();
  const beach = beachesMap[key];
  const beachDetail = beach as unknown as BeachDetail;
  beachDetail.pics = await Promise.all(beach.pics.map(getParsedImage));
  return beachDetail;
};

const getBeachDetail = (key: keyof BeachesMap) => {
  if (!cachedPromise[key]) {
    cachedPromise[key] = Promise.all([
      getParsedBeach(key),
      getPOIsFromS3(key),
    ]).then(([beach, pois]) => ({
      ...beach,
      pois,
    }));
  }
  return cachedPromise[key];
};

export default getBeachDetail;
