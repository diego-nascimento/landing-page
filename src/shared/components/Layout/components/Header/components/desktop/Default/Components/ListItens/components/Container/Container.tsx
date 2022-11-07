import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <ul
      className={`hidden  md:flex
     md:justify-center md:pt-5 md:bg-transparent md:relative md:translate-x-0 md:h-auto md:border-0 md:flex-row md:opacity-100 md:w-auto md:mt-0 md:p-0 z-20`}
    >
      {children}
    </ul>
  );
};
