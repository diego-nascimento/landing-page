import React, { useMemo } from 'react';
import { gridItemProps } from '../../types';
import { Container } from '../shared';
import { Back } from './components/Back/Back';
import { Front } from './components/Front/Front';

interface Props extends gridItemProps {}

export const Flip = ({ title, textColor = 'white', ...data }: Props) => {
  const backgroundColor = useMemo(
    () => (textColor === 'white' ? ' bg-gray-800' : 'bg-white'),
    [textColor],
  );

  return (
    <Container>
      <div
        className={`border h-full w-full md:p-5 flex justify-center items-center group-hover:my-rotate-y-180 duration-1000 preserve-3d rounded-lg relative shadow-lg ${backgroundColor} `}
      >
        <Front title={title} {...data} textColor={textColor} />
        <Back title={title} textColor={textColor} {...data} />
      </div>
    </Container>
  );
};
