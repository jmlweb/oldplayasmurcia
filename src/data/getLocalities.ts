import getBeachesList from './getBeachesList';

const getLocalities = async () => {
  const store = new Set<string>();
  const beachesList = await getBeachesList();
  beachesList.forEach(({ locality }) => {
    store.add(locality);
  });
  return Array.from(store);
};

export default getLocalities;
