import { useContext } from 'react';

import PropsContext from './PropsContext';

const useProps = () => useContext(PropsContext);

export default useProps;
