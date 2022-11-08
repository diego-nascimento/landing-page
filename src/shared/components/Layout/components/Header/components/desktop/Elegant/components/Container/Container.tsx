import {
  FullWidthContainer,
  NotFullWidthContainer,
} from '@/shared/components/Container';
import React from 'react';

interface Props {
  children: React.ReactNode;
  scrolled: boolean;
}

export const Container = ({ children, scrolled }: Props) => {
  return (
    <div
      className={`w-full fixed top-0 left-0 transition-colors  ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <FullWidthContainer>
        <NotFullWidthContainer>
          <div
            className={`px-5 ${
              scrolled ? 'py-2' : 'py-5'
            }  w-full h-full flex flex-row justify-between items-center`}
          >
            {children}
          </div>
        </NotFullWidthContainer>
      </FullWidthContainer>
    </div>
  );
};
