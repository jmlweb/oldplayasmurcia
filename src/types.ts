import { NextPage } from 'next';
import { ReactElement } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

export interface Beach {
  name: string;
  slug: string;
  address?: string;
  zipCode?: string;
  locality: string;
  parish?: string;
  phone?: string;
  email?: string;
  url?: string;
  position: [number, number];
  soilType?: string;
  swell?: string;
  occupation?: 'l' | 'm' | 'h';
  anchoringSpot: boolean;
  nudist: boolean;
  sea: 1 | 0;
  promenade: boolean;
  accessType?: string;
  blueFlag: boolean;
  accesible: boolean;
  pics: ReadonlyArray<string>;
}

export type BeachesMap = Record<string, Beach>;

export type Beaches = ReadonlyArray<Beach>;

export interface POI {
  name: string;
  contact?: {
    phone?: string;
    url?: string;
  };
  categories: ReadonlyArray<string>;
  address: string;
  location: [string, string];
}

export type POIs = ReadonlyArray<POI>;

export interface BeachDetail extends Beach {
  pois: POIs;
}

export type SimpleBeach = Pick<
  Beach,
  | 'name'
  | 'slug'
  | 'locality'
  | 'position'
  | 'occupation'
  | 'anchoringSpot'
  | 'nudist'
  | 'sea'
  | 'promenade'
  | 'blueFlag'
  | 'accesible'
> & {
  featuredPic?: string;
};

export type BeachesList = ReadonlyArray<SimpleBeach>;
