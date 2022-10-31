import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
  handleClick: () => void;
}

export const MenuIcon = ({ handleClick }: Props) => {
  return (
    <div className="pb-5 md:hidden">
      <AiOutlineMenu
        className="cursor-pointer md:hidden hover:rotate-180 transition-transform  ease-out"
        size={30}
        onClick={() => handleClick()}
      />
    </div>
  );
};
