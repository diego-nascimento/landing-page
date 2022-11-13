import { MenuIcon } from '@/shared/components/MenuIcon';
import React, { useEffect, useMemo, useState } from 'react';
import { HeaderTypes } from '../../../Container/types';
import { useResizeHook } from '../../../../../../../hooks';
import { MobileContainer } from '../../mobile';
import { Container, ListItems, Logo } from './components';
import { useScrollHook } from '@/shared/hooks/scrollHook';

export const Elegant = (data: HeaderTypes) => {
  const { CloseMenu, OpenMenu, open } = useResizeHook();
  const { scrolled } = useScrollHook();

  return (
    <Container scrolled={scrolled}>
      <Logo data={data.logo} scrolled={scrolled} />
      <ListItems
        MenuItems={data.MenuItens}
        scrolled={scrolled}
        whiteBackground={data.whiteBackground}
      />
      <MenuIcon
        handleClick={OpenMenu}
        iconColor={data.whiteBackground ? 'black' : 'white'}
        scrolled={scrolled}
      />
      <MobileContainer data={{ ...data, handleClose: CloseMenu, open }} />
    </Container>
  );
};
