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
          blueFlag,
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
          blueFlag,
          ...(pics &&
            pics.length > 0 && {
              featuredPic: pics[0],
            }),
        }),
      ),
    );
  }
  return cachedPromise;
};

export default getBeachesList;
