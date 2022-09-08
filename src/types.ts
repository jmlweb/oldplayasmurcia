import { NextPage } from 'next';
import { ReactElement } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

export interface EnhancedPic {
  src: string;
  blurred?: string;
  width?: number;
  height?: number;
  type?: string;
}

export interface BeachPart {
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
  pics: ReadonlyArray<string> | ReadonlyArray<EnhancedPic>;
}

export interface Beach extends BeachPart {
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

export interface BeachDetail extends BeachPart {
  pois: POIs;
  pics: ReadonlyArray<EnhancedPic>;
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
  featuredPic?: EnhancedPic | null;
};

export type BeachesList = ReadonlyArray<SimpleBeach>;
