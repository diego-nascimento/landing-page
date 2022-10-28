import React from 'react';
import { HeaderTypes } from '@/components/Header/';
import { Container, ListItens, Logo, MenuIcon } from './Components';

export const Default = ({ logo, MenuItens }: HeaderTypes) => {
  const [open, setMenuOpen] = React.useState(false);

  const OpenMenu = () => {
    setMenuOpen(true);
  };

  const CloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Container>
      <MenuIcon handleClick={OpenMenu} />
      <Logo logo={logo} />
      <ListItens MenuItems={MenuItens} open={open} closeMenu={CloseMenu} />
    </Container>
  );
};
