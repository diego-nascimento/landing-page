import React from 'react';
import { Default } from '../components';
import { Headers, HeaderTypes } from './types';

interface Props {
  headerSelected?: Headers;
  headerProps: HeaderTypes;
}

export const HeaderContainer = ({
  headerSelected = Headers.default,
  headerProps,
}: Props) => {
  return (
    <>
      {headerSelected === Headers.default && (
        <Default
          MenuItens={headerProps.MenuItens}
          logo={headerProps.logo}
          social={headerProps.social}
        />
      )}
    </>
  );
};
