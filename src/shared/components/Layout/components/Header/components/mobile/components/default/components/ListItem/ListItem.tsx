import { MenuItemTypes } from '@/shared/components/Layout/components/Header/Container/types';
import React from 'react';
import { MenuItem } from '../MenuItem';

interface Props {
  MenuItems: MenuItemTypes[];
}

export const ListItem = ({ MenuItems }: Props) => {
  return (
    <ul className="w-full mt-5">
      {MenuItems.map((Item) => {
        return <MenuItem Item={Item} key={Item.id} />;
      })}
    </ul>
  );
};
