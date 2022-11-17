import Link from 'next/link';
import React from 'react';
import { MenuItemTypes } from '../../../../../Container/types';
import { Item } from '../Item';

interface Props {
  MenuItems: MenuItemTypes[];
  scrolled: boolean;
  whiteBackground?: boolean;
}

export const ListItems = ({ MenuItems, scrolled, whiteBackground }: Props) => {
  return (
    <ul className=" gap-12 md:flex hidden md:flex-row">
      {MenuItems.map((MenuItem) => (
        <Link href={MenuItem.url} key={MenuItem.id} passHref>
          <Item
            MenuItem={MenuItem}
            scrolled={scrolled}
            whiteBackground={whiteBackground}
          />
        </Link>
      ))}
    </ul>
  );
};
