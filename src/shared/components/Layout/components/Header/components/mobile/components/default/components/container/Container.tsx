import React from 'react';

interface Props {
  children: React.ReactNode;
  open: boolean;
}

export const Container = ({ children, open }: Props) => {
  const handleMenuOpen = () => (open ? 'translate-x-0' : '-translate-x-full');

  return (
    <ul
      className={`flex md:hidden flex-col items-end  h-screen  fixed top-0 left-0 bg-white ${handleMenuOpen()} w-[400px] max-w-[80%]  border-r-2 transition-transform  ease-in-out p-5 `}
    >
      {children}
    </ul>
  );
};
