import React from 'react';

import { MenuItem, MenuIcon } from '../';
import { MenuItemTypes, SocialTypes } from '../../../../Container/types';
import { SocialNetworkMobile } from '../SocialNetworkMobile/SocialNetworkMobile';

interface Props {
  MenuItems: MenuItemTypes[];
  open: boolean;
  closeMenu: () => void;
  social: SocialTypes;
}

export const ListItens = ({ MenuItems, open, closeMenu, social }: Props) => {
  const handleMenuOpen = () => {
    return open ? 'translate-x-0' : '-translate-x-full';
  };

  return (
    <ul
      className={`flex flex-col items-end  h-screen  fixed top-0 left-0 bg-white ${handleMenuOpen()} w-[400px] 
      max-w-[80%]  border-r-2 transition-transform  ease-in-out p-5
       md:justify-center md:pt-5 md:bg-transparent md:relative md:translate-x-0 md:h-auto md:border-0 md:flex-row md:opacity-100 md:w-auto md:mt-0 md:p-0 z-20`}
    >
      <div className="pb-5 md:hidden">
        <MenuIcon handleClick={closeMenu} />
      </div>

      {MenuItems.map((Item) => {
        return <MenuItem Item={Item} key={Item.id} />;
      })}
      <SocialNetworkMobile
        facebookUrl={social.facebookUrl}
        instagramUrl={social.instagramUrl}
        tiktokUrl={social.tiktokUrl}
      />
    </ul>
  );
};