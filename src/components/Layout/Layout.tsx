import React from 'react';
import { Container as Header, HeaderTypes, Headers } from '@/components/Header';
import { Container as Footer } from '@/components/Footer';

interface Props {
  children: React.ReactNode;
  HeaderProps: HeaderTypes;
  headerSelected?: Headers;
}

export const Layout = ({ children, HeaderProps, headerSelected }: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header headerProps={HeaderProps} headerSelected={headerSelected} />
      <main className="w-full flex justify-center min-h-screen ">
        {children}
      </main>
      <Footer />
    </div>
  );
};
