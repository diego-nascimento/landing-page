import React from 'react';
import { Default } from '../components';
import { Headers } from './types';

interface Props {
  headerSelected?: Headers;
}

export const Container = ({ headerSelected = Headers.default }: Props) => {
  return <>{headerSelected === Headers.default && <Default />} </>;
};
