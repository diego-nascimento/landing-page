import React from 'react';
import { IconType } from 'react-icons';
import { Header } from './components';

interface Props {
  children: React.ReactNode;
  icon?: IconType;
  title?: string;
  text?: string;
  color?: string;
}

export const Box = ({ children, color = '#000', title, text, icon }: Props) => {
  return (
    <div className="shadow-xl p-8 flex justify-center flex-col items-center">
      <Header color={color} icon={icon} text={text} title={title} />
      {children}
    </div>
  );
};
