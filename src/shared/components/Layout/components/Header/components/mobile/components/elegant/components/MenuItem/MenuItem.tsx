import { MenuItemTypes } from '@/shared/components/Layout/components/Header/Container/types';
import Link from 'next/link';
import React from 'react';

interface Props {
  Item: MenuItemTypes;
}

export const MenuItem = ({ Item }: Props) => {
  return (
    <Link href={Item.url} key={Item.id} passHref>
      <li className="border-b-2 border-gray-400 border-opacity-10 py-5 w-[50vw] flex justify-center opacity-100 hover:opacity-80 transition-colors">
        <span
          className={`uppercase text-2xl tracking-widest font-bold cursor-pointer md:text-base text-white`}
        >
          {Item.label}
        </span>
      </li>
    </Link>
  );
};
