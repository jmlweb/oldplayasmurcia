import Link from 'next/link';

import LogoSymbol from './LogoSymbol';

const Logo = () => (
  <Link href="/">
    <a className="inline-flex items-center gap-2 font-alternate text-3xl text-sky-800">
      <LogoSymbol className="-mt-1 h-7 w-7 fill-sky-400" />{' '}
      <span>
        Playas
        <span className="text-sky-600">Murcia</span>
      </span>
    </a>
  </Link>
);

export default Logo;
