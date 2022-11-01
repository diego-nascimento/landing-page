import React from 'react';
import { Layout, LayoutProps } from '@/shared/components/Layout';
import { FullWidthContainer } from '@/shared/components/Container';

interface Props extends LayoutProps {}

export const Home = (data: Props) => {
  return (
    <Layout data={data}>
      <FullWidthContainer>
        <div className="bg-red-500 w-full">asd</div>
      </FullWidthContainer>
    </Layout>
  );
};
