import { GetStaticProps } from 'next';

import { getBeachDetail } from '@/data';
import { BeachDetail } from '@/types';

export interface Props {
  detail: BeachDetail;
}

export const getStaticProps: GetStaticProps<
  Props,
  {
    slug: string;
  }
> = async ({ params }) => {
  if (!params) {
    throw new Error('No params found');
  }
  const [detail] = await Promise.all([getBeachDetail(params.slug)]);
  return {
    props: {
      detail,
    },
    revalidate: 12 * 60 * 60,
  };
};
