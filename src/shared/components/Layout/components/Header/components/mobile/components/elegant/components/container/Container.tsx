import React from 'react';

interface Props {
  children: React.ReactNode;
  open: boolean;
}

export const Container = ({ children, open }: Props) => {
  return (
    <div
      className={`w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-80 ${
        open ? 'flex' : 'hidden'
      } justify-center items-center flex-col`}
    >
      {children}
    </div>
  );
};
