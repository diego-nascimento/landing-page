import { BelowMenu, FullWidthContainer, NotFullWidthContainer } from '@/shared';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <BelowMenu>
      <FullWidthContainer>
        <NotFullWidthContainer>
          <div className="w-full   mt-10">
            <div className="w-full flex justify-center flex-col items-center px-5">
              {children}
            </div>
          </div>
        </NotFullWidthContainer>
      </FullWidthContainer>
    </BelowMenu>
  );
};
