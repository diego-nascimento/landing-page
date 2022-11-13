import React from 'react';
import { FullWidthContainer } from '../fullWidthContainer';

interface Props {
  children: React.ReactNode;
}

export const ModuleWrapper = ({ children }: Props) => {
  return (
    <FullWidthContainer>
      <div className="flex flex-col w-full ">{children}</div>
    </FullWidthContainer>
  );
};
