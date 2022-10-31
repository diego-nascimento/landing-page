import {
  FullWidthContainer,
  NotFullWidthContainer,
} from '@/shared/components/Container';
import React from 'react';
import { BlackScreen } from '../BlackScreen';

interface Props {
  children: React.ReactNode;
  open: boolean;
  handleClick: () => void;
}

export const Container = ({ children, open, handleClick }: Props) => {
  return (
    <FullWidthContainer>
      <BlackScreen handleClick={handleClick} open={open} />
      <div className="w-full flex justify-center relative border-b-4 border-b-black">
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
