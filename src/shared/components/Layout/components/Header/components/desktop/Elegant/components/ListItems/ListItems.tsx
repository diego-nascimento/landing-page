import Link from 'next/link';
import React from 'react';
import { MenuItemTypes } from '../../../../../Container/types';

interface Props {
  MenuItems: MenuItemTypes[];
  scrolled: boolean;
}

export const ListItems = ({ MenuItems, scrolled }: Props) => {
  return (
    <ul className=" gap-12 md:flex hidden md:flex-row">
      {MenuItems.map((Item) => (
        <Link href={Item.url} key={Item.id} passHref>
          <li>
            <span
              className={`${
                scrolled ? 'text-black' : 'text-white'
              } uppercase text-xl tracking-widest font-bold cursor-pointer md:text-base`}
            >
              {Item.label}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};
