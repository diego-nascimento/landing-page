import {
  FullWidthContainer,
  NotFullWidthContainer,
} from '@/components/Container';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <FullWidthContainer>
      <div className="w-full flex justify-center">
        <NotFullWidthContainer>
          <div
            className="flex justify-between items-center px-5
          md:flex-col w-full md:py-2"
          >
            {children}
          </div>
        </NotFullWidthContainer>
      </div>
    </FullWidthContainer>
  );
};
