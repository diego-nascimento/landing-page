import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <main className="w-full flex justify-center min-h-screen ">{children}</main>
  );
};
