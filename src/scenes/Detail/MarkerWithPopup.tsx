import { FC } from 'react';
import { Marker, MarkerProps, Popup } from 'react-leaflet';

interface Props extends MarkerProps {
  name: string;
}

const MarkerWithPopup: FC<Props> = ({
  children,
  icon,
  name,
  position,
  ...rest
}) => (
  <Marker position={position} icon={icon} {...rest}>
    <Popup>
      <h3 className="!mb-2 !mt-0 font-alternate text-xl text-slate-600">
        {name}
      </h3>
      {children}
    </Popup>
  </Marker>
);

export default MarkerWithPopup;
