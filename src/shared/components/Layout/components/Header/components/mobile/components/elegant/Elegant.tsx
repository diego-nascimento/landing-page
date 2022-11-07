import { CloseIcon } from '@/shared/components';
import React from 'react';
import { HeaderTypes } from '../../../../Container/types';
import { Container, ListItems, Logo } from './components';

interface Props extends HeaderTypes {
  open: boolean;
  handleClose: () => void;
}

export const Elegant = ({ MenuItens, open, handleClose, logo }: Props) => {
  return (
    <>
      <Container open={open}>
        <div className="absolute top-0 right-0 pt-5 pr-5">
          <CloseIcon handleClick={handleClose} iconColor="white" />
        </div>
        <ListItems MenuItems={MenuItens} />
        <Logo logo={logo} />
      </Container>
    </>
  );
};
