import React from 'react';

import { MenuItem, MenuIcon } from '../';
import { MenuItemTypes, SocialTypes } from '../../../../Container/types';
import { SocialNetworkMobile } from '../SocialNetworkMobile/SocialNetworkMobile';
import { Container } from './components';
interface Props {
  MenuItems: MenuItemTypes[];
  open: boolean;
  closeMenu: () => void;
  social: SocialTypes;
}

export const ListItens = ({ MenuItems, open, closeMenu, social }: Props) => {
  return (
    <Container open={open}>
      <>
        <MenuIcon handleClick={closeMenu} />
        {MenuItems.map((Item) => {
          return <MenuItem Item={Item} key={Item.id} />;
        })}
        <SocialNetworkMobile
          facebookUrl={social.facebookUrl}
          instagramUrl={social.instagramUrl}
          tiktokUrl={social.tiktokUrl}
        />
      </>
    </Container>
  );
};
