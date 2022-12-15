import React from 'react';

interface Props {
  tag: 'h1' | 'h2' | 'h3';
  text: string;
  titleColor: 'white' | 'black';
  center?: boolean;
}

export const Title = ({ tag, text, titleColor, center = true }: Props) => {
  const TagName = tag;
  return (
    <TagName
      className={`text-3xl md:text-4xl font-semibold font-sans ${
        center ? 'text-center' : 'text-left'
      } select-none ${titleColor === 'white' ? 'text-white' : 'text-black'} `}
    >
      {text}
    </TagName>
  );
};
