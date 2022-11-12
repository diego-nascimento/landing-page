import React, { useMemo } from 'react';
import { Title } from '../Typography';

interface Props {
  children: React.ReactNode;
  title?: string;
  titleColor?: 'white' | 'black';
  withShadow?: boolean;
  columnsAmount?: 2 | 3 | 4;
}

export const Grid = ({
  children,
  title,
  titleColor = 'black',
  withShadow = true,
  columnsAmount = 3,
}: Props) => {
  const columns = useMemo(() => {
    if (columnsAmount === 2) return 'md:grid-cols-2  grid-cols-1';
    if (columnsAmount === 3) return 'md:grid-cols-3 grid-cols-1';
    return 'lg:grid-cols-4  md:grid-cols-2 grid-cols-1';
  }, [columnsAmount]);
  return (
    <section
      className={`flex flex-col items-center w-full ${
        withShadow && 'shadow-lg'
      } p-5 pt-0 `}
    >
      {!!title && <Title tag="h1" text={title} titleColor={titleColor} />}
      <ul className={`grid mt-0  ${columns} w-full`}>{children}</ul>
    </section>
  );
};
