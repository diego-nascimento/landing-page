import {
  FullWidthContainer,
  NotFullWidthContainer,
} from '@/shared/components/Container';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <FullWidthContainer>
      <NotFullWidthContainer>
        <div className="px-5 pt-5">{children}</div>
      </NotFullWidthContainer>
    </FullWidthContainer>
  );
};
