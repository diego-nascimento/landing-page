import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
  handleClick: () => void;
  iconColor?: 'white' | 'black';
  scrolled?: boolean;
}

export const MenuIcon = ({
  handleClick,
  iconColor = 'black',
  scrolled = false,
}: Props) => {
  const handleColor = () => {
    const color = iconColor === 'white' ? 'white' : 'black';
    return scrolled ? 'black' : color;
  };

  return (
    <div className=" md:hidden">
      <AiOutlineMenu
        className="cursor-pointer md:hidden hover:rotate-180 transition-transform  ease-out"
        size={30}
        onClick={() => handleClick()}
        color={handleColor()}
      />
    </div>
  );
};
