import React from 'react';
import { Layout, LayoutProps } from '@/shared/components/Layout';

import { Section1 } from './Components';

interface Props extends LayoutProps {}

export const Home = (data: Props) => {
  return (
    <Layout data={data}>
      <Section1 />
    </Layout>
  );
};
