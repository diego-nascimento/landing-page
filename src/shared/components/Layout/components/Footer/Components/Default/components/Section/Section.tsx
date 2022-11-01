import React from 'react';
import { FooterTypes } from '../../../../Container/types';

interface Props extends FooterTypes {}

export const Section = (data: Props) => {
  return data.sections.map((section) => {
    return <span key={section.id}>{section.title}</span>;
  });
};
