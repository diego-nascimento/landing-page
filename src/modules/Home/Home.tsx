import React from 'react';
import { Layout, LayoutProps } from '@/shared/components/Layout';

import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
} from './Components';

import { ModuleWrapper } from '@/shared';

interface Props extends LayoutProps {}

export const Home = (data: Props) => {
  return (
    <Layout data={data}>
      <ModuleWrapper>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </ModuleWrapper>
    </Layout>
  );
};
