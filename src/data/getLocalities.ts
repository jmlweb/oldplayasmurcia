import getBeachesList from './lib/getBeachesList';

let cachedPromise: Promise<ReadonlyArray<string>>;

const unique = <T>(x: T[]) => Array.from(new Set(x));

const getLocalities = async () => {
  if (!cachedPromise) {
    cachedPromise = getBeachesList().then((beachesList) =>
      unique(beachesList.map(({ locality }) => locality)),
    );
  }
  return cachedPromise;
};

export default getLocalities;
