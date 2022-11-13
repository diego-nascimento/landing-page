import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const BelowMenu = ({ children }: Props) => {
  return <div className="mt-20">{children}</div>;
};
