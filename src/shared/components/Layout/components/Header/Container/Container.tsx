import React from 'react';
import { Default, Elegant } from '../components/desktop/';

import { Headers, HeaderTypes, mobileHeaders } from './types';

type HeaderProps = {};
interface Props {
  headerSelected?: Headers;
  mobileHeaderSelected?: mobileHeaders;
  headerProps: HeaderTypes;
}

export const HeaderContainer = ({
  headerSelected = Headers.default,
  headerProps,
  mobileHeaderSelected = mobileHeaders.default,
}: Props) => {
  if (!!!headerProps) return null;
  return (
    <header>
      {headerSelected === Headers.default && (
        <Default
          MenuItens={headerProps.MenuItens}
          logo={headerProps.logo}
          social={headerProps.social}
          mobileHeader={mobileHeaderSelected}
        />
      )}
      {headerSelected === Headers.elegant && (
        <Elegant
          MenuItens={headerProps.MenuItens}
          logo={headerProps.logo}
          social={headerProps.social}
          mobileHeader={mobileHeaderSelected}
        />
      )}
    </header>
  );
};
