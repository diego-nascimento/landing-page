import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const FullWidthContainer = ({ children }: Props) => {
  return <div className="w-full flex justify-center">{children}</div>;
};
