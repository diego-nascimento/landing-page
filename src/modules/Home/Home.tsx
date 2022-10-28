import React from 'react';
import { Layout } from '@/shared/components/Layout';
import { FullWidthContainer } from '@/shared/components/Container';
import { HeaderTypes } from '@/shared/components/Header';

interface Props {
  headerProps: HeaderTypes;
}

export const Home = ({ headerProps }: Props) => {
  return (
    <Layout HeaderProps={headerProps}>
      <FullWidthContainer>
        <div className="bg-red-500 w-full">asd</div>
      </FullWidthContainer>
    </Layout>
  );
};
