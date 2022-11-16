import { Title } from '@/shared';
import React from 'react';
import { Container, Accordions } from './components';

export const Section2 = () => {
  return (
    <Container>
      <Title text="Perguntas frequentes" titleColor="black" tag="h2" />
      <Accordions />
    </Container>
  );
};
