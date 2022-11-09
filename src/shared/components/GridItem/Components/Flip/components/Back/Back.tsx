import { gridItemProps } from '@/shared/components/GridItem/types';
import React from 'react';
import { Text, Title, ImageComponent } from '../../../shared';

interface Props extends gridItemProps {}

export const Back = ({ title, center, text, textColor = 'black' }: Props) => {
  const color = textColor === 'black' ? 'white' : 'black';
  return (
    <div className="absolute flex justify-center items-center  flex-col backface-hidden  w-full h-full p-5 my-rotate-y-180">
      {!!title && <Title title={title} titleColor={color} center={center} />}
      {!!text && <Text text={text} textColor={color} center={center} />}
    </div>
  );
};
