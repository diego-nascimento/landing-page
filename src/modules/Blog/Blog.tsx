import { ModuleWrapper } from '@/shared';
import React from 'react';
import { Layout, LayoutProps } from '@/shared/components/Layout';

interface Props extends LayoutProps {}

export const Blog = (data: Props) => {
  return (
    <Layout
      data={{
        ...data,
        HeaderProps: { ...data.HeaderProps, whiteBackground: true },
      }}
    >
      <ModuleWrapper>asd</ModuleWrapper>
    </Layout>
  );
};
