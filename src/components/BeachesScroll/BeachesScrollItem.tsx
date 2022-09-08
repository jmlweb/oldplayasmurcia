import Image from 'next/future/image';
import Link from 'next/link';
import { FC, MouseEventHandler, ReactNode, useMemo } from 'react';

import ItemCard from '@/components/ItemCard';
import { SimpleBeach } from '@/types';

type Tag = keyof Pick<
  SimpleBeach,
  'blueFlag' | 'accesible' | 'promenade' | 'nudist'
>;

const TAGS: Record<Tag, string> = {
  accesible: 'Accesible',
  promenade: 'Paseo',
  nudist: 'Nudista',
};

const tagNames = Object.keys(TAGS) as ReadonlyArray<Tag>;

interface TagItemProps {
  className: string;
  children: ReactNode;
}

const TagItem: FC<TagItemProps> = ({ children, className }) => (
  <li className={`rounded-sm border px-2 py-1 text-sm ${className}`}>
    {children}
  </li>
);

export interface Props {
  item: SimpleBeach;
  onClick: MouseEventHandler<HTMLAnchorElement>;
  priority?: boolean;
}

const BeachesScrollItem: FC<Props> = ({ item, onClick, priority }) => {
  const itemTags = useMemo(
    () => tagNames.filter((tagName) => item[tagName]),
    [item],
  );

  return (
    <Link href={`/d/${item.slug}`} passHref>
      <ItemCard onClick={onClick} className="flex flex-col-reverse gap-2">
        <header className="my-1">
          <h2 className="w-72 overflow-hidden text-ellipsis whitespace-nowrap font-medium text-slate-600 transition-colors group-hover:text-sky-500 md:w-80 xl:w-96">
            {item.name}
          </h2>
          <h3 className="text-sm text-slate-400">{item.locality}</h3>
        </header>
        <div className="relative block aspect-video w-72 overflow-hidden rounded-sm transition-[filter] duration-500 ease-in-out will-change-[filter] group-hover:brightness-110 group-hover:invert-[.1] md:w-80 xl:w-96">
          {item.featuredPic && (
            <Image
              src={item.featuredPic!.src}
              fill
              alt=""
              placeholder={
                item.featuredPic!.src && item.featuredPic!.blurred
                  ? 'blur'
                  : undefined
              }
              blurDataURL={item.featuredPic!.blurred}
              className="bg-slate-400 object-cover object-center"
              priority={priority}
            />
          )}
          <ul className="pointer-events-none absolute bottom-2 flex w-full flex-wrap-reverse justify-end gap-1 px-2">
            {item.blueFlag && (
              <TagItem className="border-sky-600/50 bg-sky-500/95 text-sky-50">
                Bandera Azul
              </TagItem>
            )}
            {itemTags.map((tagName) => (
              <TagItem
                key={tagName}
                className="border-slate-400/50 bg-white/95 text-sky-600"
              >
                {TAGS[tagName]}
              </TagItem>
            ))}
          </ul>
        </div>
      </ItemCard>
    </Link>
  );
};

export default BeachesScrollItem;
