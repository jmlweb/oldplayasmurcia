import { ComponentPropsWithoutRef, FC } from 'react';

interface Props extends ComponentPropsWithoutRef<'li'> {
  borderColor?: string;
  textColor?: string;
  name: string;
}

const DetailFeature: FC<Props> = ({
  borderColor = 'border-sky-600/20',
  textColor = 'text-slate-500',
  name,
  children,
  ...rest
}) => (
  <li
    className={`rounded-md border bg-white p-2 shadow-sm ${borderColor} ${textColor}`}
    {...rest}
  >
    <span className="mb-1 inline-block text-xs uppercase text-slate-400">
      {name}
    </span>
    <br />
    {children}
  </li>
);

export default DetailFeature;
