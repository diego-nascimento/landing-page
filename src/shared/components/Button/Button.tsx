import React from 'react';

interface Props {
  text: string;
  background: string;
  textColor: 'white' | 'black';
  onClick?: () => void;
  type: 'submit' | 'button';
}

export const Button = ({
  text,
  background,
  textColor,
  type,
  onClick = () => {},
}: Props) => {
  return (
    <button
      className=" w-full mt-5 rounded-3xl px-4 py-3 font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all uppercase"
      style={{ backgroundColor: background, color: textColor }}
      type={type}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};
