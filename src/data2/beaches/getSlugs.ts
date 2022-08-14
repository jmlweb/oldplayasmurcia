import getBeachesBasic from './getBeachesBasic';

let slugsPromise: Promise<ReadonlyArray<string>> | null;

const getSlugs = () => {
  if (!slugsPromise) {
    slugsPromise = getBeachesBasic()
      .then((beaches) => beaches.map(({ slug }) => slug))
      .catch(() => {
        slugsPromise = null;
        throw new Error('error getting slugs');
      });
  }
  return slugsPromise;
};

export default getSlugs;
