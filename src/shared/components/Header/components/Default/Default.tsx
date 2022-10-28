import React from 'react';
import { HeaderTypes } from '@/components/Header/';
import { Container, ListItens, Logo, MenuIcon } from './Components';
import { useResizeHook } from '../../hooks';

export const Default = ({ logo, MenuItens }: HeaderTypes) => {
  const { CloseMenu, OpenMenu, open } = useResizeHook();

  return (
    <Container open={open} handleClick={CloseMenu}>
      <MenuIcon handleClick={OpenMenu} />
      <Logo logo={logo} />
      <ListItens MenuItems={MenuItens} open={open} closeMenu={CloseMenu} />
    </Container>
  );
};
