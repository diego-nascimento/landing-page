import React from 'react';
import { FooterTypes } from '../../Container/types';
import {
  Column,
  Container,
  Copyrights,
  ListSections,
  SocialNetworkCard,
} from './components';

interface Props extends FooterTypes {}

export const Default = (data: Props) => {
  return (
    <Container>
      {!!data.socials && (
        <ListSections amountOfItens={data.socials.length}>
          {data.socials.map((social, index) => {
            return <SocialNetworkCard {...social} key={index} />;
          })}
        </ListSections>
      )}
      {data.sections && (
        <ListSections amountOfItens={data.sections.length}>
          {data.sections &&
            data.sections.map((section) => {
              return <Column {...section} key={section.id} />;
            })}
        </ListSections>
      )}
      <Copyrights />
    </Container>
  );
};
