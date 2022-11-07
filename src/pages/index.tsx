import React from 'react';
import { Home as HomeComponent } from '@/modules/Home';
import { GetStaticProps } from 'next';
import { headerService } from '@/shared/components/Layout/components';
import { footerService } from '@/shared/components/Layout/components/Footer/services';

import { LayoutProps } from '@/shared/components';

interface Props extends LayoutProps {}

const Home = (data: Props) => {
  return (
    <HomeComponent
      HeaderProps={data.HeaderProps}
      footerProps={data.footerProps}
      footerSelected={data.footerSelected}
      headerSelected={data.HeaderProps.headerSelected}
      mobileHeaderSelected={data.HeaderProps.mobileHeader}
    />
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const headerProps = await headerService();
  const footerProps = await footerService();
  return {
    props: {
      HeaderProps: headerProps,
      footerProps: footerProps,
    },
  };
};
