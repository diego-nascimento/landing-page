import React from 'react';
import { Title } from '@/shared';

interface Props {
  title: string;
  text?: string;
}

export const ModuleHeader = ({ title, text }: Props) => {
  return (
    <div className="px-5">
      <Title tag="h1" text={title} titleColor="black" />
      {text && (
        <p className="mt-5 font-medium text-lg text-gray-400 text-center">
          {text}
        </p>
      )}
    </div>
  );
};
