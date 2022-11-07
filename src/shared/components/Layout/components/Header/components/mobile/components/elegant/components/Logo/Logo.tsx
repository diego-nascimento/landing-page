import { LogoTypes } from '@/shared/components/Layout/components/Header/Container/types';
import React from 'react';

interface Props {
  logo: LogoTypes;
}

export const Logo = ({ logo: { logo, url } }: Props) => {
  return (
    <div className="pt-5">
      <a href={url}>
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};
