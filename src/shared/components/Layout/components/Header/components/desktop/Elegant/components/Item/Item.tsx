import React from 'react';
import { MenuItemTypes } from '../../../../../Container/types';

interface Props {
  scrolled: boolean;
  whiteBackground?: boolean;
  MenuItem: MenuItemTypes;
}

export const Item = ({ MenuItem, ...data }: Props) => {
  if (MenuItem.emphasis) return <EmphasysItem {...data} MenuItem={MenuItem} />;
  return <NormalItem {...data} MenuItem={MenuItem} />;
};

const NormalItem = ({ MenuItem, scrolled, whiteBackground }: Props) => {
  return (
    <li>
      <span
        className={`${
          scrolled || whiteBackground ? 'text-black' : 'text-white'
        } uppercase text-xl tracking-widest font-bold cursor-pointer md:text-base `}
      >
        {MenuItem.label}
      </span>
    </li>
  );
};

const EmphasysItem = ({ MenuItem, scrolled, whiteBackground }: Props) => {
  return (
    <li>
      <span
        className={`${
          scrolled || whiteBackground
            ? 'bg-green-500 text-white '
            : 'bg-white text-black'
        } ${
          scrolled ? 'py-3' : 'py-4'
        } hover:shadow-lg transition-all  px-12 uppercase  rounded-full  text-xl tracking-widest font-bold cursor-pointer md:text-base `}
      >
        {MenuItem.label}
      </span>
    </li>
  );
};
