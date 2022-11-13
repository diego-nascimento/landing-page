import React from 'react';

interface Props {
  text: string;
  color: string;
}

export const Title = ({ color, text }: Props) => {
  return (
    <h2
      className="text-center font-semibold text-lg uppercase -tracking-tight"
      style={{ color: color }}
    >
      {text}
    </h2>
  );
};
