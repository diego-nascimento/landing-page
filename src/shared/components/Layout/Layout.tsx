import React from 'react';
import {
  HeaderContainer as Header,
  HeaderTypes,
  Headers,
  FooterContainer as Footer,
  Main,
} from '@/shared/components/Layout/components';

interface Props {
  children: React.ReactNode;
  HeaderProps: HeaderTypes;
  headerSelected?: Headers;
}

export const Layout = ({ children, HeaderProps, headerSelected }: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header headerProps={HeaderProps} headerSelected={headerSelected} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
