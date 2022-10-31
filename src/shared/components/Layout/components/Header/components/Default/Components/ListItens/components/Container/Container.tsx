import React from 'react';

interface Props {
  children: React.ReactNode;
  open: boolean;
}

export const Container = ({ children, open }: Props) => {
  const handleMenuOpen = () => (open ? 'translate-x-0' : '-translate-x-full');

  return (
    <ul
      className={`flex flex-col items-end  h-screen  fixed top-0 left-0 bg-white ${handleMenuOpen()} w-[400px] 
    max-w-[80%]  border-r-2 transition-transform  ease-in-out p-5
     md:justify-center md:pt-5 md:bg-transparent md:relative md:translate-x-0 md:h-auto md:border-0 md:flex-row md:opacity-100 md:w-auto md:mt-0 md:p-0 z-20`}
    >
      {children}
    </ul>
  );
};
