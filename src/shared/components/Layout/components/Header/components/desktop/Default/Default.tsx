import { MenuIcon } from '@/shared/components/MenuIcon';
import React from 'react';

import { HeaderTypes } from '../../../Container/types';
import { useResizeHook } from '../../../hooks';
import { MobileContainer } from '../../mobile';

import { Container, ListItens, Logo } from './Components';

export const Default = (data: HeaderTypes) => {
  const { CloseMenu, OpenMenu, open } = useResizeHook();

  return (
    <Container open={open} handleClick={CloseMenu}>
      <MenuIcon handleClick={OpenMenu} />
      <Logo logo={data.logo} />
      <ListItens MenuItems={data.MenuItens} />
      <MobileContainer data={{ ...data, handleClose: CloseMenu, open }} />
    </Container>
  );
};
