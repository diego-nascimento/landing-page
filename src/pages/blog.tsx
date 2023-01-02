import React from 'react';
import { Blog as BlogComponent } from 'modules';
import { GetStaticProps } from 'next';
import { headerService } from '@/shared/components/Layout/components';
import { footerService } from '@/shared/components/Layout/components/Footer/services';
import { LayoutProps } from '@/shared';

interface Props extends LayoutProps {}

//1a5w6d
const BlogPage = (data: Props) => {
  return (
    <BlogComponent
      HeaderProps={data.HeaderProps}
      footerProps={data.footerProps}
      footerSelected={data.footerSelected}
      headerSelected={data.HeaderProps.headerSelected}
      mobileHeaderSelected={data.HeaderProps.mobileHeader}
    />
  );
};

export default BlogPage;

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
