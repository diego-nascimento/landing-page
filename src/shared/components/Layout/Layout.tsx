import React from 'react';
import {
  HeaderContainer as Header,
  HeaderTypes,
  Headers,
  FooterContainer as Footer,
  Main,
  mobileHeaders,
} from '@/shared/components/Layout/components';
import { Footers, FooterTypes } from './components/Footer/Container/types';

export type LayoutProps = {
  HeaderProps: HeaderTypes;
  headerSelected?: Headers;
  mobileHeaderSelected?: mobileHeaders;
  footerSelected?: Footers;
  footerProps: FooterTypes;
};
interface Props {
  children: React.ReactNode;
  data: LayoutProps;
}

export const Layout = ({ data, children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header
        headerProps={data.HeaderProps}
        headerSelected={data.headerSelected}
        mobileHeaderSelected={data.mobileHeaderSelected}
      />
      <Main>{children}</Main>
      <Footer
        footerData={data.footerProps}
        footerSelected={data.footerSelected}
      />
    </div>
  );
};
