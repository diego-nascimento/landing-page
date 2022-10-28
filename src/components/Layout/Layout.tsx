import React from 'react';
import { Container as Header } from '@/components/Header';
import { Container as Footer } from '@/components/Footer';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="w-full flex justify-center min-h-screen ">
        {children}
      </main>
      <Footer />
    </div>
  );
};
