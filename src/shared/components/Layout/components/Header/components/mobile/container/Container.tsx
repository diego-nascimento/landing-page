import React from 'react';
import { HeaderTypes, mobileHeaders } from '../../../Container/types';
import { Default } from '../components';

interface MobileContainerProps extends HeaderTypes {
  open: boolean;
  handleClose: () => void;
}

interface Props {
  data: MobileContainerProps;
}

export const MobileContainer = ({ data }: Props) => {
  return (
    <>
      {data.mobileHeader === mobileHeaders.default && (
        <Default
          MenuItens={data.MenuItens}
          open={data.open}
          logo={data.logo}
          social={data.social}
          mobileHeader={data.mobileHeader}
          handleClose={data.handleClose}
        />
      )}
    </>
  );
};
