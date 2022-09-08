import dynamic from 'next/dynamic';
import { FC, memo, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { BeachDetail } from '@/types';

import { defaultIcon } from './icons';

const PoiMarker = dynamic(() => import('./PoiMarker'));
const MarkerWithPopup = dynamic(() => import('./MarkerWithPopup'));

type Props = Pick<BeachDetail, 'name' | 'position' | 'pois'>;

const DetailMap: FC<Props> = ({ name, position, pois }) => {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        key={name}
        className="absolute h-full w-full bg-sky-100"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          detectRetina
        />
        {pois.map((poi) => (
          <PoiMarker key={`${poi.name}-${poi.categories.join('-')}`} {...poi} />
        ))}
        <MarkerWithPopup
          name={name}
          position={position}
          icon={defaultIcon}
          zIndexOffset={999}
        >
          <p className="!mb-1 !mt-0">
            <a className="text-sky-600" href={`geo:${position.join(',')}`}>
              {position.join(',')}
            </a>
          </p>
        </MarkerWithPopup>
      </MapContainer>
    </>
  );
};

export default memo(DetailMap);
