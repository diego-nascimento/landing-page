import { MenuItemTypes } from '@/shared/components/Layout/components/Header/Container/types';

import React from 'react';
import { MenuItem } from '../';

interface Props {
  MenuItems: MenuItemTypes[];
}

export const ListItems = ({ MenuItems }: Props) => {
  return (
    <ul className="flex flex-col">
      {MenuItems.map((Item) => (
        <MenuItem Item={Item} key={Item.id} />
      ))}
    </ul>
  );
};
