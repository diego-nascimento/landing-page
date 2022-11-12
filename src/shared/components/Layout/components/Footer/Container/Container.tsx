import React from 'react';
import { Footers, FooterTypes } from './types';
import { Default } from '../Components';

interface Props {
  footerSelected?: Footers;
  footerData: FooterTypes;
}

export const FooterContainer = ({
  footerSelected = Footers.default,
  footerData,
}: Props) => {
  if (!!!footerData) return null;
  return (
    <>
      {footerSelected === Footers.default && (
        <Default
          logoUrl={footerData.logoUrl}
          sections={footerData.sections}
          socials={footerData.socials}
        />
      )}
    </>
  );
};
