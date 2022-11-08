import React, { useMemo } from 'react';
import { Title } from '../Typography';

interface Props {
  children: React.ReactNode;
  leftBigger: boolean;
  title?: string;
  titleColor?: 'black' | 'white';
}

export const Grid1_2 = ({
  children,
  leftBigger,
  title,
  titleColor = 'black',
}: Props) => {
  const columns = useMemo(
    () =>
      leftBigger ? 'md:grid-cols-left-bigger' : 'md:grid-cols-right-bigger',
    [leftBigger],
  );
  return (
    <div>
      {!!title && <Title tag="h1" text={title} titleColor={titleColor} />}
      <ul className={`grid grid-cols-1 gap-5 md:gap-0 ${columns}  w-full mt-5`}>
        {children}
      </ul>
    </div>
  );
};
