import React from 'react';

interface Props {
  text: string;
  textColor: 'white' | 'black';
  center?: boolean;
}

export const Text = ({ text, textColor, center = true }: Props) => {
  return (
    <h2
      className={`mt-2 ${textColor === 'white' ? 'text-white' : 'text-black'}
    ${!!center ? 'text-center' : 'text-left'}`}
    >
      {text}
    </h2>
  );
};
