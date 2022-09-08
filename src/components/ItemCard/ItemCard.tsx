import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

const ItemCard: FC<ComponentPropsWithoutRef<'a'>> = ({
  className,
  ...rest
}) => (
  <a
    className={`group rounded-md border border-slate-200 bg-slate-50 p-2 shadow-lg shadow-slate-100 hover:shadow-lg ${className}`}
    {...rest}
  />
);

export default ItemCard;
