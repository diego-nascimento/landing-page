import React from 'react';

interface Props {
  tag: 'h1' | 'h2' | 'h3';
  text: string;
  titleColor: 'white' | 'black';
}

export const Title = ({ tag, text, titleColor }: Props) => {
  const TagName = tag;
  return (
    <TagName
      className={`text-3xl md:text-5xl font-semibold font-sans text-center ${
        titleColor === 'white' ? 'text-white' : 'text-black'
      }`}
    >
      {text}
    </TagName>
  );
};
