import Image from 'next/future/image';
import { FC, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import ItemCard from '@/components/ItemCard';
import { BeachDetail } from '@/types';

interface Props {
  pics: BeachDetail['pics'];
}

const DetailPic: FC<BeachDetail['pics'][number]> = ({ src, blurred }) => (
  <ItemCard
    href={src}
    key={src}
    target="_blank"
    className="shrink-0 overflow-hidden"
    rel="noreferrer"
  >
    <div className="relative aspect-video w-72 transition-[filter] duration-500 ease-in-out will-change-[filter] group-hover:brightness-110 group-hover:invert-[.1] md:w-80 xl:w-96">
      <Image
        src={src}
        alt=""
        fill
        placeholder={src && blurred ? 'blur' : undefined}
        blurDataURL={blurred}
        className="bg-slate-400 object-cover object-center"
      />
    </div>
  </ItemCard>
);

const DetailPics: FC<Props> = ({ pics = [] }) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
    safeDisplacement: 16,
  });
  return (
    <div
      className="relative flex gap-3 overflow-x-auto px-3 py-6"
      {...events}
      ref={ref}
    >
      {pics.map((pic) => (
        <DetailPic key={pic.src} {...pic} />
      ))}
    </div>
  );
};

export default DetailPics;
