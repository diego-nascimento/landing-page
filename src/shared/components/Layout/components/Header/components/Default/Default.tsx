import React from 'react';

import { Container, ListItens, Logo, MenuIcon } from './Components';
import { useResizeHook } from '../../hooks';
import { HeaderTypes } from '../../Container/types';

export const Default = ({ logo, MenuItens, social }: HeaderTypes) => {
  const { CloseMenu, OpenMenu, open } = useResizeHook();

  return (
    <Container open={open} handleClick={CloseMenu}>
      <MenuIcon handleClick={OpenMenu} />
      <Logo logo={logo} />
      <ListItens
        MenuItems={MenuItens}
        open={open}
        closeMenu={CloseMenu}
        social={social}
      />
    </Container>
  );
};
