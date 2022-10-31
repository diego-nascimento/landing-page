import React from 'react';

import { MenuItem, MenuIcon } from '../';
import { MenuItemTypes } from '../../../../Container/types';

interface Props {
  MenuItems: MenuItemTypes[];
  open: boolean;
  closeMenu: () => void;
}

export const ListItens = ({ MenuItems, open, closeMenu }: Props) => {
  const handleMenuOpen = () => {
    return open ? 'translate-x-0' : '-translate-x-full';
  };

  return (
    <ul
      className={`flex flex-col items-end  h-screen  fixed top-0 left-0 bg-white ${handleMenuOpen()} w-[400px] 
      max-w-[80%]  border-r-2 transition-transform  ease-in-out p-5
       md:justify-center md:pt-5 md:bg-transparent md:relative md:translate-x-0 md:h-auto md:border-0 md:flex-row md:opacity-100 md:w-auto md:mt-0 md:p-0`}
    >
      <div className="pb-5 md:hidden">
        <MenuIcon handleClick={closeMenu} />
      </div>

      {MenuItems.map((Item) => {
        return <MenuItem Item={Item} key={Item.id} />;
      })}
    </ul>
  );
};
