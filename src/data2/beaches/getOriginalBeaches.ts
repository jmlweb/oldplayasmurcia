import { Beach } from '@/types';

import getFromS3 from '../getFromS3';

let beachesPromise: Promise<ReadonlyArray<Beach>> | null = null;

const getOriginalBeaches = () => {
  if (!beachesPromise) {
    beachesPromise = getFromS3<ReadonlyArray<Beach>>('beaches.json').catch(
      () => {
        beachesPromise = null;
        throw new Error('Error getting beaches');
      },
    );
  }
  return beachesPromise;
};

export default getOriginalBeaches;
