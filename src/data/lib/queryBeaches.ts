import { Beach, BeachesList, EnhancedPic } from '../../types';
import getBeachesList from './getBeachesList';
import getParsedImage from './getParsedImage';

type Filter = (item: Beach) => boolean;
export type Sort = (a: Beach, b: Beach) => -1 | 0 | 1;
type Limit = number;

interface Props {
  filter: Filter;
  sort?: Sort;
  limit?: Limit;
}

const getFeaturedPic = async (
  pics: Beach['pics'],
): Promise<EnhancedPic | null> => {
  if (!pics.length) {
    return null;
  }
  try {
    const img = await getParsedImage(pics[0]);
    if (
      pics.length > 1 &&
      (!img.width || !img.height || img.width < 400 || img.height < 400)
    ) {
      throw new Error('invalid image');
    }
    return img;
  } catch (e) {
    return await getFeaturedPic(pics.slice(1));
  }
};

const queryBeaches = async ({
  filter,
  sort,
  limit,
}: Props): Promise<BeachesList> => {
  let beaches: ReadonlyArray<Beach> = (await getBeachesList()).filter(filter);
  if (sort) {
    beaches = [...beaches].sort(sort);
  }
  if (limit) {
    beaches = [...beaches].slice(0, limit);
  }
  return await Promise.all(
    beaches.map(
      async ({
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
        featuredPic: await getFeaturedPic(pics),
      }),
    ),
  );
};

export default queryBeaches;
