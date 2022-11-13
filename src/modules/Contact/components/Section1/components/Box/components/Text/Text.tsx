import React from 'react';

interface Props {
  text: string;
}

export const Text = ({ text }: Props) => {
  return (
    <span className="font-normal text-gray-400 text-lg mt-4 leading-4">
      {text}
    </span>
  );
};
