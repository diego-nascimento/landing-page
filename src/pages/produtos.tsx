import React from 'react';
import { Products as ProductComponent } from '@/modules';
import { GetStaticProps } from 'next';
import { headerService } from '@/shared/components/Layout/components';
import { footerService } from '@/shared/components/Layout/components/Footer/services';

import { LayoutProps } from '@/shared/components';

interface Props extends LayoutProps {}

const Products = (data: Props) => {
  return (
    <ProductComponent
      HeaderProps={data.HeaderProps}
      footerProps={data.footerProps}
      footerSelected={data.footerSelected}
      headerSelected={data.HeaderProps.headerSelected}
      mobileHeaderSelected={data.HeaderProps.mobileHeader}
    />
  );
};

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const headerProps = await headerService();
  const footerProps = await footerService();
  return {
    props: {
      HeaderProps: headerProps,
      footerProps: footerProps,
    },
  };
};
