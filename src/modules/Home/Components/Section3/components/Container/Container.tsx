import { FullWidthContainer, NotFullWidthContainer } from '@/shared';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <FullWidthContainer>
      <NotFullWidthContainer>
        <div className=" p-10 mx-5 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg mt-10 md:mt-20">
          {children}
        </div>
      </NotFullWidthContainer>
    </FullWidthContainer>
  );
};
