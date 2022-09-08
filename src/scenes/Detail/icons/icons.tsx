import L, { DivIconOptions } from 'leaflet';
import { renderToString } from 'react-dom/server';

import AnimalMarker from './AnimalMarker';
import CampingMarker from './CampingMarker';
import CashMarker from './CashMarker';
import CoffeeMarker from './CoffeeMarker';
import DefaultMarker from './DefaultMarker';
import ElectricMarker from './ElectricMarker';
import HotelMarker from './HotelMarker';
import PoiMarker from './PoiMarker';
import RestaurantMarker from './RestaurantMarker';
import ShopMarker from './ShopMarker';
import ToolMarker from './ToolMarker';

const className = 'border-0 bg-white/50 rounded-full';

const createDivIcon = (html: DivIconOptions['html']) => {
  return L.divIcon({
    className,
    html,
    iconSize: [40, 40],
  });
};

export const defaultIcon = createDivIcon(renderToString(<DefaultMarker />));
export const poiIcon = createDivIcon(renderToString(<PoiMarker />));
export const restaurantIcon = createDivIcon(
  renderToString(<RestaurantMarker />),
);
export const coffeeIcon = createDivIcon(renderToString(<CoffeeMarker />));
export const electricIcon = createDivIcon(renderToString(<ElectricMarker />));
export const shopIcon = createDivIcon(renderToString(<ShopMarker />));
export const animalIcon = createDivIcon(renderToString(<AnimalMarker />));
export const cashIcon = createDivIcon(renderToString(<CashMarker />));
export const hotelIcon = createDivIcon(renderToString(<HotelMarker />));
export const toolIcon = createDivIcon(renderToString(<ToolMarker />));
export const campingIcon = createDivIcon(renderToString(<CampingMarker />));
