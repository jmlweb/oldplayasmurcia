import { GetStaticProps } from 'next';

export { default } from '@/scenes/Home/Home.scene';

import { getBeachesList } from '@/data';

export const getStaticProps: GetStaticProps = async () => {
  const data = await getBeachesList();
  console.log(data);
  return {
    props: {},
  };
};
