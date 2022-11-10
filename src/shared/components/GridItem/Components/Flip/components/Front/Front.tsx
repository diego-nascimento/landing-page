import React, { useMemo } from 'react';

interface Props {
  title?: string;
  textColor?: 'white' | 'black';
}

export const Front = ({ title, textColor = 'black' }: Props) => {
  const color = useMemo(
    () => (textColor === 'black' ? 'text-black' : 'text-white'),
    [textColor],
  );

  return (
    <div className="flex justify-center items-center flex-col backface-hidden absolute ">
      <h3 className={`text-xl capitalize ${color} `}>{title}</h3>
    </div>
  );
};
