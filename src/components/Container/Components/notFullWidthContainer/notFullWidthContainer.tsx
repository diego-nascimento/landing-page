import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const NotFullWidthContainer = ({ children }: Props) => {
  return <div className="w-full max-w-not-full">{children}</div>;
};
