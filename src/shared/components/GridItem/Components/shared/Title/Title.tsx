import React from 'react';

interface Props {
  title: string;
  titleColor: 'white' | 'black';
  center?: boolean;
}

export const Title = ({ title, titleColor, center = true }: Props) => {
  return (
    <h2
      className={`font-semibold text-xl mt-5 ${
        titleColor === 'white' ? 'text-white' : 'text-black '
      }
    ${!!center ? 'text-center' : 'text-left'}`}
    >
      {title}
    </h2>
  );
};
