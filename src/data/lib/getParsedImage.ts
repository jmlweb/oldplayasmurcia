import { getPlaiceholder } from 'plaiceholder';

import { BeachDetail } from '@/types';

const getParsedImageFn = async (
  src: string,
): Promise<BeachDetail['pics'][number]> => {
  try {
    const { base64, img } = await getPlaiceholder(src, {
      size: 64,
    });
    return {
      ...img,
      blurred: base64,
    };
  } catch (e) {
    return {
      src,
      width: 0,
      height: 0,
    };
  }
};

const cachedPromises: Record<string, Promise<BeachDetail['pics'][number]>> = {};

const getParsedImage = (src: string) => {
  if (!cachedPromises[src]) {
    cachedPromises[src] = getParsedImageFn(src);
  }
  return cachedPromises[src];
};

export default getParsedImage;
