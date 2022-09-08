import { Sort } from './queryBeaches';

const defaultSort: Sort = (a, b) => {
  if (a.pics.length > b.pics.length) {
    return -1;
  }
  if (a.pics.length < b.pics.length) {
    return 1;
  }
  return Math.random() >= 0.5 ? 1 : -1;
};

export default defaultSort;
