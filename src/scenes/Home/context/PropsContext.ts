import { createContext } from 'react';

import { BeachesList } from '@/types';

export interface PropsContextValue {
  accesibleBeaches: BeachesList;
  featuredBeaches: BeachesList;
}

const PropsContext = createContext({} as PropsContextValue);

export default PropsContext;
