import Image from 'next/image';
import { FC, ReactElement } from 'react';

import Logo from '@/components/Logo';

import AuxBlock from './AuxBlock';

interface CommonLayoutProps {
  children: ReactElement;
}

export const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <AuxBlock as="header">
        <Logo />
      </AuxBlock>

      <main className="py-3">{children}</main>

      <AuxBlock as="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </AuxBlock>
    </div>
  );
};

const getLayout = (page: ReactElement) => <CommonLayout>{page}</CommonLayout>;

export default getLayout;
