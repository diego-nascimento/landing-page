import React from 'react';
import { IconType } from 'react-icons';
import { Text } from '../Text';
import { Title } from '../Title';

interface Props {
  icon?: IconType;
  title?: string;
  text?: string;
  color: string;
}

export const Header = ({ icon: Icon, color, text, title }: Props) => {
  return (
    <>
      {Icon && <Icon size={60} color={color} className="mb-4" />}
      {title && <Title color={color} text={title} />}
      {text && <Text text={text} />}
    </>
  );
};
