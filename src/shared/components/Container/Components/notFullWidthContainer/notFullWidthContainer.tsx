import React from 'react';

interface Props {
  children: React.ReactNode;
  centered?: boolean;
}

export const NotFullWidthContainer = ({
  children,
  centered = false,
}: Props) => {
  return (
    <div
      className={`w-full max-w-not-full ${
        centered ? 'flex justify-center items-center flex-col' : ''
      }`}
    >
      {children}
    </div>
  );
};
