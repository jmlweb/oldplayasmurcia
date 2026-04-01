import { GetStaticPaths } from 'next';

import getBeachesSlugs from '../../data/getBeachesSlugs';

const buildPaths = async () => {
  if (process.env.NODE_ENV !== 'production' || process.env.CI) {
    return [];
  }
  const slugs = await getBeachesSlugs();
  return slugs.map((slug) => ({
    params: {
      slug,
    },
  }));
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: await buildPaths(),
  fallback: 'blocking',
});
