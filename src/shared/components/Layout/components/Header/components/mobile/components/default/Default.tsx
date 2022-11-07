import React from 'react';
import { HeaderTypes } from '../../../../Container/types';
import { BlackScreen } from '../../../desktop/Default/Components';
import { Container, SocialNetworkMobile, ListItem } from './components';

import { CloseIcon } from '@/shared/components';

interface Props extends HeaderTypes {
  open: boolean;
  handleClose: () => void;
}

export const Default = ({ MenuItens, social, open, handleClose }: Props) => {
  return (
    <>
      <BlackScreen handleClick={handleClose} open={open} />
      <Container open={open}>
        <CloseIcon handleClick={handleClose} />
        <ListItem MenuItems={MenuItens} />
        <SocialNetworkMobile
          facebookUrl={social.facebookUrl}
          instagramUrl={social.instagramUrl}
          tiktokUrl={social.tiktokUrl}
        />
      </Container>
    </>
  );
};
