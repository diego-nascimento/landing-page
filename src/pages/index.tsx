import React, { use } from 'react';
import { Home as HomeComponent } from '@/modules/Home';
import { HeaderTypes } from '@/shared/components/Header';
import { GetStaticProps } from 'next';
import { headerService } from '@/shared/components/Header/services';

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
