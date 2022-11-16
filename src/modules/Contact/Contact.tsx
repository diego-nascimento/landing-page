import React from 'react';
import { Layout, LayoutProps } from '@/shared/components/Layout';

import { ModuleWrapper } from '@/shared';
import { Section1 } from './components';
import { Section2 } from './Section2';

interface Props extends LayoutProps {}

export const Contact = (data: Props) => {
  return (
    <Layout
      data={{
        ...data,
        HeaderProps: { ...data.HeaderProps, whiteBackground: true },
      }}
    >
      <ModuleWrapper>
        <Section1 />
        <Section2 />
      </ModuleWrapper>
    </Layout>
  );
};
