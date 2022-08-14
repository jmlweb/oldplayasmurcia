import getBeachesList from './getBeachesList';

let cachedPromise: Promise<ReadonlyArray<string>>;

const getBeachesSlugs = () => {
  if (!cachedPromise) {
    cachedPromise = getBeachesList().then((beaches) =>
      beaches.map(({ slug }) => slug),
    );
  }
  return cachedPromise;
};

export default getBeachesSlugs;
