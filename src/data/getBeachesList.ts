import { BeachesList } from '@/types';

import { getBeachesFromS3 } from './lib/S3';

let cachedPromise: Promise<BeachesList>;

const getBeachesList = () => {
  if (!cachedPromise) {
    cachedPromise = getBeachesFromS3().then((beachesMap) =>
      Object.values(beachesMap).map(
        ({
          name,
          slug,
          locality,
          position,
          occupation,
          anchoringSpot,
          nudist,
          sea,
          promenade,
          accesible,
          pics,
        }) => ({
          name,
          slug,
          locality,
          position,
          occupation,
          anchoringSpot,
          nudist,
          sea,
          promenade,
          accesible,
          featuredPic: pics && pics.length > 0 ? pics[0] : undefined,
        }),
      ),
    );
  }
  return cachedPromise;
};

export default getBeachesList;
