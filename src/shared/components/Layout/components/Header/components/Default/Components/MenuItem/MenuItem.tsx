import { MenuItemTypes } from '@/components/Header/Container/types';
import React from 'react';

interface Props {
  Item: MenuItemTypes;
}

export const MenuItem = ({ Item }: Props) => {
  return (
    <li className=" cursor-pointer px-3 opacity-75 border-2 border-black w-full py-1 rounded-lg md:border-0">
      <a
        href={Item.url}
        className="flex flex-col items-start h-10 justify-center"
      >
        <span className="font-semibold hover:underline text-lg">
          {Item.label}
        </span>
        {!!Item.subLabel && (
          <span className="font-normal text-xs">{Item.subLabel}</span>
        )}
      </a>
    </li>
  );
};
