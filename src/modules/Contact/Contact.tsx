import React from 'react';
import { Layout, LayoutProps } from '@/shared/components/Layout';

import { ModuleWrapper } from '@/shared';
import { Section1 } from './components';

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
      </ModuleWrapper>
    </Layout>
  );
};
