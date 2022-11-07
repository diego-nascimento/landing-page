import {
  FullWidthContainer,
  NotFullWidthContainer,
} from '@/shared/components/Container';
import React from 'react';

interface Props {
  children: React.ReactNode;
  open: boolean;
  handleClick: () => void;
}

export const Container = ({ children }: Props) => {
  return (
    <FullWidthContainer>
      <div className="  w-full flex justify-center relative border-b-4 border-b-black ">
        <NotFullWidthContainer>
          <nav
            className="flex justify-between items-center px-5
          md:flex-col w-full md:py-2"
          >
            {children}
          </nav>
        </NotFullWidthContainer>
      </div>
    </FullWidthContainer>
  );
};
