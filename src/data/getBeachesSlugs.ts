import getBeachesList from './lib/getBeachesList';

let cachedPromise: Promise<ReadonlyArray<string>>;

const getBeachesSlugs = () => {
  if (!cachedPromise) {
    cachedPromise = getBeachesList().then((beaches) =>
      beaches
        .filter(
          ({ accesible, blueFlag, promenade, nudist, pics }) =>
            accesible || (blueFlag && pics.length > 0) || promenade || nudist,
        )
        .map(({ slug }) => slug),
    );
  }
  return cachedPromise;
};

export default getBeachesSlugs;
