import React from 'react';
import { HeaderTypes } from '../../../../Container/types';
import { BlackScreen } from '../../../desktop/Default/Components';
import { Container, SocialNetworkMobile } from './components';
import { MenuItem } from './components/MenuItem';
import { MenuIcon } from '@/shared/components';

interface Props extends HeaderTypes {
  open: boolean;
  handleClose: () => void;
}

export const Default = ({ MenuItens, social, open, handleClose }: Props) => {
  return (
    <>
      <BlackScreen handleClick={handleClose} open={open} />
      <Container open={open}>
        <MenuIcon handleClick={handleClose} />
        {MenuItens.map((Item) => {
          return <MenuItem Item={Item} key={Item.id} />;
        })}
        <SocialNetworkMobile
          facebookUrl={social.facebookUrl}
          instagramUrl={social.instagramUrl}
          tiktokUrl={social.tiktokUrl}
        />
      </Container>
    </>
  );
};
