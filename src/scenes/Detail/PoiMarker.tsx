import { ComponentPropsWithoutRef, FC } from 'react';

import { POI } from '@/types';

import {
  animalIcon,
  campingIcon,
  cashIcon,
  coffeeIcon,
  electricIcon,
  hotelIcon,
  poiIcon,
  restaurantIcon,
  shopIcon,
  toolIcon,
} from './icons';
import MarkerWithPopup from './MarkerWithPopup';

const getIcon = (categories: string) => {
  if (categories.includes('restaurant')) {
    return restaurantIcon;
  }
  if (categories.includes('electric')) {
    return electricIcon;
  }
  if (
    categories.includes('coffee') ||
    categories.includes('café') ||
    categories.includes('nightlife')
  ) {
    return coffeeIcon;
  }
  if (categories.includes('shop')) {
    return shopIcon;
  }
  if (categories.includes('cash') || categories.includes('bank')) {
    return cashIcon;
  }
  if (categories.includes('camping')) {
    return campingIcon;
  }
  if (
    categories.includes('hotel') ||
    categories.includes('apartment') ||
    categories.includes('holiday rental')
  ) {
    return hotelIcon;
  }
  if (categories.includes('construction')) {
    return toolIcon;
  }
  if (categories.includes('veterinarian')) {
    return animalIcon;
  }
  return poiIcon;
};

const TextLine: FC<ComponentPropsWithoutRef<'p'>> = ({
  className,
  ...rest
}) => <p className={`!mb-1 !mt-0 ${className}`} {...rest} />;

const PoiMarker: FC<POI> = ({ name, location, categories, contact }) => (
  <MarkerWithPopup
    key={name}
    name={name}
    position={[Number(location[0]), Number(location[1])]}
    icon={getIcon(categories.join(', '))}
  >
    <TextLine className="text-slate-400">{categories.join(', ')}</TextLine>
    {contact?.url && (
      <TextLine>
        <a
          className="!text-sky-500"
          href={contact.url}
          target="_blank"
          rel="noreferrer"
        >
          {contact.url}
        </a>
      </TextLine>
    )}
    {contact?.phone && (
      <TextLine>
        <a
          className="!text-sky-500"
          href={`phone:${contact.phone.replace(/\s/g, '')}`}
        >
          {contact.phone}
        </a>
      </TextLine>
    )}
  </MarkerWithPopup>
);

export default PoiMarker;
