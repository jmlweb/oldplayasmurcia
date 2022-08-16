import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { BeachesList, SimpleBeach } from '@/types';

interface Props {
  items: BeachesList;
  title: string;
}

type Tags = keyof Pick<
  SimpleBeach,
  'blueFlag' | 'accesible' | 'promenade' | 'nudist'
>;

const TAGS: Record<Tags, string> = {
  blueFlag: 'B. Azul',
  accesible: 'Accesible',
  promenade: 'Paseo',
  nudist: 'Nudista',
};

const BeachesGrid: FC<Props> = ({ items, title }) => (
  <section className="w-screen p-3">
    <h1 className="mb-2 font-alternate text-xl text-sky-600">{title}</h1>
    <div className="relative flex snap-x snap-mandatory items-start gap-3 overflow-x-auto">
      {items.map((item) => (
        <div
          key={item.slug}
          className="snap-start rounded-md border border-slate-200 bg-slate-50 p-2 shadow-lg shadow-slate-100"
        >
          <Link key={item.slug} href={`/d/${item.slug}`}>
            <a
              className="relative mb-2 block aspect-video w-72 overflow-hidden rounded-sm brightness-125 contrast-100 transition-[filter] duration-700 will-change-[filter] hover:saturate-150 hover:sepia-[.5] md:w-80 xl:w-96

"
            >
              <Image
                src={item.featuredPic!}
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
              <ul className="absolute bottom-2 flex w-full flex-wrap-reverse justify-end gap-1 px-2">
                <li className="rounded-sm border border-sky-900/50 bg-sky-700/90 px-2 py-1 text-sm text-sky-100">
                  {item.locality}
                </li>
                {(Object.keys(TAGS) as ReadonlyArray<Tags>).map((tagName) => {
                  if (item[tagName]) {
                    return (
                      <li
                        key={TAGS[tagName]}
                        className="rounded-sm border border-slate-400/50 bg-slate-200/90 px-2 py-1 text-sm text-sky-800"
                      >
                        {TAGS[tagName]}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </a>
          </Link>
          <h3 className="font-bold text-slate-700">
            <Link href={`/d/${item.slug}`}>
              <a>{item.name}</a>
            </Link>
          </h3>
        </div>
      ))}
    </div>
  </section>
);

export default BeachesGrid;
