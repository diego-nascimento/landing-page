import React from 'react';
import { Layout, LayoutProps } from '@/shared/components/Layout';

import {
  Section1,
  Section2,
  Section3,
  Container,
  Section4,
  Section5,
} from './Components';

interface Props extends LayoutProps {}

export const Home = (data: Props) => {
  return (
    <Layout data={data}>
      <Container>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Container>
    </Layout>
  );
};
