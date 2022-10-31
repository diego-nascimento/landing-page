import React from 'react';
import { Default } from '../components/desktop/Default';

import { Headers, HeaderTypes, mobileHeaders } from './types';

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
  return (
    <>
      {headerSelected === Headers.default && (
        <Default
          MenuItens={headerProps.MenuItens}
          logo={headerProps.logo}
          social={headerProps.social}
          mobileHeader={mobileHeaderSelected}
        />
      )}
    </>
  );
};
