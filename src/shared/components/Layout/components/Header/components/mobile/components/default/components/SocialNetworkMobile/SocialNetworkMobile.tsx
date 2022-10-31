import React from 'react';

import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SocialTypes } from '../../../../../../Container/types';

import { SocialLink } from './components';

interface Props extends SocialTypes {}

export const SocialNetworkMobile = (data: Props) => {
  return (
    <div className="md:hidden absolute bottom-0 left-0 py-5  pl-5 flex justify-start gap-3 border-t-2 w-full bg-slate-100">
      {!!data.facebookUrl && (
        <SocialLink url={data.facebookUrl}>
          <FaFacebook size={30} />
        </SocialLink>
      )}
      {!!data.instagramUrl && (
        <SocialLink url={data.instagramUrl}>
          <FaInstagram size={30} />
        </SocialLink>
      )}
      {!!data.tiktokUrl && (
        <SocialLink url={data.tiktokUrl}>
          <FaTiktok size={30} />
        </SocialLink>
      )}
    </div>
  );
};
