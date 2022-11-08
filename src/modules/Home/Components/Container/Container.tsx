import { FullWidthContainer } from '@/shared';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <FullWidthContainer>
      <div className="flex flex-col w-full ">{children}</div>
    </FullWidthContainer>
  );
};
