import Link from 'next/link';
import React from 'react';
import { LogoTypes } from '../../../../../Container/types';

interface Props {
  data: LogoTypes;
  scrolled?: boolean;
}

export const Logo = ({ data, scrolled = true }: Props) => {
  return (
    <Link href={data.url}>
      <img src={data.logo} alt="logo" className={`transition-transform`} />
    </Link>
  );
};
