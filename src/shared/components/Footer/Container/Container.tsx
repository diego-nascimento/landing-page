import React from 'react';
import { Footers } from './types';
import { Default } from '../Components';

interface Props {
  footerSelected?: Footers;
}

export const Container = ({ footerSelected = Footers.default }: Props) => {
  return <>{footerSelected === Footers.default && <Default />}</>;
};
