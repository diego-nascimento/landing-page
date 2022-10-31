import React from 'react';

import { MenuItem } from '../';
import { MenuItemTypes } from '../../../../../Container/types';

import { Container } from './components';
interface Props {
  MenuItems: MenuItemTypes[];
}

export const ListItens = ({ MenuItems }: Props) => {
  return (
    <Container>
      <>
        {MenuItems.map((Item) => {
          return <MenuItem Item={Item} key={Item.id} />;
        })}
      </>
    </Container>
  );
};
