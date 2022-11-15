import React from 'react';
import { IconType } from 'react-icons';
import { Header } from './components';

interface Props {
  children: React.ReactNode;
  icon?: IconType;
  title?: string;
  text?: string;
  color?: string;
  withShadow?: boolean;
}

export const Box = ({
  children,
  color = '#000',
  title,
  text,
  icon,
  withShadow = true,
}: Props) => {
  const shadow = withShadow ? 'shadow-xl' : '';
  return (
    <div className={`${shadow} p-8 flex flex-col items-center justify-center`}>
      <Header color={color} icon={icon} text={text} title={title} />
      {children}
    </div>
  );
};
