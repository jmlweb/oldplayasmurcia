import { FC, ReactNode } from 'react';

import PropsContext, { PropsContextValue } from './PropsContext';

interface Props extends PropsContextValue {
  children: ReactNode;
}

const PropsProvider: FC<Props> = ({
  children,
  accesibleBeaches,
  featuredBeaches,
}) => (
  <PropsContext.Provider
    value={{
      accesibleBeaches,
      featuredBeaches,
    }}
  >
    {children}
  </PropsContext.Provider>
);

export default PropsProvider;
