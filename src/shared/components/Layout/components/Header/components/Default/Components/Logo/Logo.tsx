import React from 'react';
import { LogoTypes } from '../../../../Container/types';

interface Props {
  logo: LogoTypes;
}

export const Logo = ({ logo: { logo, url } }: Props) => {
  return (
    <div className=" md:w-full md:flex md:justify-center z-0">
      <a href={url}>
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};
