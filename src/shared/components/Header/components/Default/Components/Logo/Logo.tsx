import React from 'react';
import { LogoTypes } from '@/components/Header/';

interface Props {
  logo: LogoTypes;
}

export const Logo = ({ logo: { logo, url } }: Props) => {
  return (
    <div className=" md:w-full md:flex md:justify-center">
      <a href={url}>
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};
