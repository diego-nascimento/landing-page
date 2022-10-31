import React from 'react';
import { Home as HomeComponent } from '@/modules/Home';
import { GetStaticProps } from 'next';
import {
  headerService,
  HeaderTypes,
} from '@/shared/components/Layout/components';

interface Props {
  headerProps: HeaderTypes;
}

const Home = ({ headerProps }: Props) => {
  return <HomeComponent headerProps={headerProps} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const headerProps = await headerService();
  return {
    props: {
      headerProps: headerProps,
    },
  };
};
