import React from 'react';
import { Layout, LayoutProps } from '@/shared/components/Layout';

import {
  Container,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from './Components';
import { Section7 } from './Components/Section7';

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
        <Section6 />
        <Section7 />
      </Container>
    </Layout>
  );
};
