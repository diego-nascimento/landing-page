import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <li className="flex justify-center flex-col w-full p-5">{children}</li>
  );
};
