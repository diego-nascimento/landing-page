import { FullWidthContainer, NotFullWidthContainer } from '@/shared';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <FullWidthContainer>
      <NotFullWidthContainer>
        <div className=" px-5 mt-10 md:mt-20">{children}</div>
      </NotFullWidthContainer>
    </FullWidthContainer>
  );
};
