import { gridItemProps } from '@/shared/components/GridItem/types';
import React from 'react';
import { Text, Title } from '../../../shared';

interface Props extends gridItemProps {}

export const Back = ({ title, center, text, textColor = 'black' }: Props) => {
  return (
    <div className="absolute flex justify-center items-center  flex-col backface-hidden  w-full h-full p-5 my-rotate-y-180">
      {!!title && (
        <Title title={title} titleColor={textColor} center={center} />
      )}
      {!!text && <Text text={text} textColor={textColor} center={center} />}
    </div>
  );
};
