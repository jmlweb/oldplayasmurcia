import { createElement, FC, ReactNode } from 'react';

interface Props {
  as: 'header' | 'footer';
  children: ReactNode;
}

const AuxBlock: FC<Props> = ({ children, as }) =>
  createElement(
    as,
    {
      className: `flex items-center justify-center py-2 px-3 bg-sky-50 ${
        as === 'footer' ? 'border-t' : 'border-b'
      } border-sky-100`,
    },
    children,
  );

export default AuxBlock;
