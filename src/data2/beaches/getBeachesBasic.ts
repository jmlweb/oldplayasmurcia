import { BeachBasic } from '@/types';

import getBeaches from './getOriginalBeaches';

let beachesListPromise: Promise<ReadonlyArray<BeachBasic>> | null;

const getBeachesBasic = () => {
  if (!beachesListPromise) {
    beachesListPromise = getBeaches()
      .then((beaches) =>
        beaches.map(
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
          }) => {
            const beachBasic: BeachBasic = {
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
            };
            return beachBasic;
          },
        ),
      )
      .catch(() => {
        beachesListPromise = null;
        throw new Error('Error getting beachesList');
      });
  }
  return beachesListPromise;
};

export default getBeachesBasic;
