import React from 'react';
import { Title } from '../Typography';

interface Props {
  children: React.ReactNode;
  title?: string;
  titleColor?: 'white' | 'black';
  withShadow?: boolean;
}

export const Grid = ({
  children,
  title,
  titleColor = 'black',
  withShadow = true,
}: Props) => {
  return (
    <section
      className={`flex flex-col items-center w-full ${
        withShadow && 'shadow-lg'
      } `}
    >
      {!!title && <Title tag="h1" text={title} titleColor={titleColor} />}
      <ul className="grid mt-0 md:mt-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 w-full ">
        {children}
      </ul>
    </section>
  );
};
