import React from 'react';
import { Title } from '@/shared';

export const Header = () => {
  return (
    <>
      <Title tag="h1" text="Contato" titleColor="black" />
      <p className="mt-5 font-medium text-lg text-gray-400 text-center">
        Por favor, entre em contato se tiver alguma duvida
      </p>
    </>
  );
};
