import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  handleClick: () => void;
  iconColor?: 'white' | 'black';
  iconSize?: number;
}

export const CloseIcon = ({
  handleClick,
  iconColor = 'black',
  iconSize = 40,
}: Props) => {
  const handleColor = () => {
    return iconColor === 'white' ? 'white' : 'black';
  };

  return (
    <div className=" md:hidden">
      <AiOutlineClose
        className="cursor-pointer md:hidden hover:rotate-180 transition-transform  ease-out"
        size={iconSize}
        onClick={() => handleClick()}
        color={handleColor()}
      />
    </div>
  );
};
