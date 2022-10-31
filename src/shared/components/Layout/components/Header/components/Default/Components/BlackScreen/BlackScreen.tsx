import React from 'react';

interface Props {
  open: boolean;
  handleClick: () => void;
}

export const BlackScreen = ({ handleClick, open }: Props) => {
  return (
    <>
      {!!open && (
        <div
          className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-70 md:hidden transition-opacity"
          onClick={handleClick}
        />
      )}
    </>
  );
};
