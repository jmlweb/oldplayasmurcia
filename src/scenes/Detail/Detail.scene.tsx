import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { FC } from 'react';

import { NextPageWithLayout } from '@/types';

import DetailFeature from './DetailFeature';
import { Props } from './getStaticProps';

const DetailMap = dynamic(() => import('./DetailMap'), {
  ssr: false,
});
const DetailPics = dynamic(() => import('./DetailPics'));

const OCCUPATION_MAP = {
  l: 'Baja',
  m: 'Media',
  h: 'Alta',
} as const;

const YesNoFeature: FC<{
  name: string;
  value?: boolean;
}> = ({ name, value }) => (
  <DetailFeature
    borderColor={value ? 'border-teal-600/30' : 'border-pink-600/20'}
    textColor={value ? 'text-teal-600' : 'text-pink-600'}
    name={name}
  >
    <span>{value ? 'Sí' : 'No'}</span>
  </DetailFeature>
);

const Detail: NextPageWithLayout<Props> = ({ detail }) => {
  const addressLine = [
    detail.address,
    detail.parish,
    detail.zipCode,
    detail.locality,
  ]
    .filter((v) => v)
    .join(', ');

  return (
    <>
      <Head>
        <title>{detail.name} - Playas Murcia</title>
        <meta
          name="description"
          content={`${detail.name} - Listado de playas de la Región de Murcia`}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
      </Head>
      <header className="my-4 px-3">
        <h1 className="mr-2 inline font-alternate text-4xl text-sky-800">
          {detail.name}
        </h1>
        <h2 className="inline font-alternate text-4xl text-slate-400">
          {detail.locality}
        </h2>
        <p className="flex flex-wrap items-center gap-2">
          <span className="text-md text-slate-500">{addressLine} </span>
          <a
            href={`https://www.openstreetmap.org/?mlat=${detail.position[0]}&mlon=${detail.position[1]}#map=10/${detail.position[0]}/${detail.position[1]}`}
            className="text-md inline-block text-sky-500"
            target="_blank"
            rel="noreferrer"
          >
            {detail.position[0].toString().slice(0, 9)},{' '}
            {detail.position[1].toString().slice(0, 9)}
          </a>
        </p>
      </header>
      <ul className="mt-3 grid grid-cols-features gap-2 bg-sky-50 px-3 py-5 text-sm text-sky-800">
        <YesNoFeature name="Accesible" value={detail.accesible} />
        <YesNoFeature name="Bandera Azul" value={detail.blueFlag} />
        {detail.email && (
          <DetailFeature name="email">
            <a
              href={`mailto:${detail.email}`}
              className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-sky-500"
            >
              {detail.email}
            </a>
          </DetailFeature>
        )}
        <DetailFeature name="Mar">
          <span>{detail.sea === 1 ? 'Mar Menor' : 'Mar Mediterráneo'}</span>
        </DetailFeature>
        <YesNoFeature name="Nudista" value={detail.nudist} />
        <YesNoFeature name="Paseo Marítimo" value={detail.promenade} />
        {detail.occupation && (
          <DetailFeature name="Ocupación">
            <span>{OCCUPATION_MAP[detail.occupation]}</span>
          </DetailFeature>
        )}
        {detail.swell && (
          <DetailFeature name="Oleaje">
            <span>{detail.swell}</span>
          </DetailFeature>
        )}
        <YesNoFeature name="Punto amarre" value={detail.anchoringSpot} />
        {detail.phone && (
          <DetailFeature name="Teléfono">
            <span>{detail.phone}</span>
          </DetailFeature>
        )}
        {detail.soilType && (
          <DetailFeature name="Tipo arena">
            <span>{detail.soilType}</span>
          </DetailFeature>
        )}
        {detail.url && (
          <DetailFeature name="Web">
            <a
              className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-sky-500"
              href={detail.url}
              target="_blank"
              rel="noreferrer"
              title={`Visitar ${detail.url}`}
            >
              {detail.url}
            </a>
          </DetailFeature>
        )}
      </ul>
      <DetailPics pics={detail.pics} />
      <div className="bg-slate-50 p-3 text-slate-700">
        <div className="relative aspect-square max-h-[44rem] w-full bg-slate-300">
          <DetailMap
            key={detail.slug}
            name={detail.name}
            position={detail.position}
            pois={detail.pois}
          />
        </div>
        {detail.accessType && (
          <p className="mx-auto my-4 max-w-3xl text-sm text-slate-500">
            <span className="uppercase text-slate-400">Acceso: </span>
            {detail.accessType}
          </p>
        )}
        <footer className="my-4 flex flex-wrap gap-3">
          <a
            href={`https://www.google.com/maps/dir//${detail.position[0]},%20${detail.position[1]}`}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-md bg-sky-500 px-3 py-2 text-center text-sm text-sky-50 transition-colors hover:bg-sky-600 md:w-auto"
          >
            Abrir en Google Maps
          </a>
          <a
            href={`https://waze.com/ul?ll=${detail.position[0]},${detail.position[1]}&navigate=yes`}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-md bg-sky-500 px-3 py-2 text-center text-sm text-sky-50 transition-colors hover:bg-sky-600 md:w-auto"
          >
            Abrir en Waze
          </a>
          <a
            href={`https://bing.com/maps/default.aspx?rtp=~pos.${detail.position[0]}_${detail.position[1]}`}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-md bg-sky-500 px-3 py-2 text-center text-sm text-sky-50 transition-colors hover:bg-sky-600 md:w-auto"
          >
            Abrir en Bing Maps
          </a>
          <a
            href={`https://share.here.com/r/mylocation/${detail.position[0]},${detail.position[1]}`}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-md bg-sky-500 px-3 py-2 text-center text-sm text-sky-50 transition-colors hover:bg-sky-600 md:w-auto"
          >
            Abrir en HERE WeGo
          </a>
        </footer>
      </div>
      <Script
        src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
        integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
        crossOrigin=""
        strategy="lazyOnload"
      ></Script>
    </>
  );
};

export default Detail;
