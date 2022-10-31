import React from 'react';
import { HeaderTypes, mobileHeaders } from '../../../Container/types';
import { Default } from '../components';

interface Props extends HeaderTypes {
  open: boolean;
  handleClose: () => void;
}

export const MobileContainer = ({
  MenuItens,
  logo,
  mobileHeader,
  social,
  open,
  handleClose,
}: Props) => {
  return (
    <>
      {mobileHeader === mobileHeaders.default && (
        <Default
          MenuItens={MenuItens}
          open={open}
          logo={logo}
          social={social}
          mobileHeader={mobileHeader}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
