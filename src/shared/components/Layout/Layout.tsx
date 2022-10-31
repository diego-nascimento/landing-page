import React from 'react';
import {
  HeaderContainer as Header,
  HeaderTypes,
  Headers,
  FooterContainer as Footer,
  Main,
  mobileHeaders,
} from '@/shared/components/Layout/components';

interface Props {
  children: React.ReactNode;
  HeaderProps: HeaderTypes;
  headerSelected?: Headers;
  mobileHeaderSelected?: mobileHeaders;
}

export const Layout = ({
  children,
  HeaderProps,
  headerSelected,
  mobileHeaderSelected,
}: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header
        headerProps={HeaderProps}
        headerSelected={headerSelected}
        mobileHeaderSelected={mobileHeaderSelected}
      />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
