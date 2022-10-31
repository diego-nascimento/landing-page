import { MenuIcon } from '@/shared/components/MenuIcon';
import React from 'react';

import { HeaderTypes } from '../../../Container/types';
import { useResizeHook } from '../../../hooks';
import { MobileContainer } from '../../mobile';

import { Container, ListItens, Logo } from './Components';

export const Default = ({
  logo,
  MenuItens,
  social,
  mobileHeader,
}: HeaderTypes) => {
  const { CloseMenu, OpenMenu, open } = useResizeHook();

  return (
    <Container open={open} handleClick={CloseMenu}>
      <MenuIcon handleClick={OpenMenu} />
      <Logo logo={logo} />
      <ListItens MenuItems={MenuItens} />
      <MobileContainer
        MenuItens={MenuItens}
        open={open}
        logo={logo}
        mobileHeader={mobileHeader}
        social={social}
        handleClose={CloseMenu}
      />
    </Container>
  );
};
