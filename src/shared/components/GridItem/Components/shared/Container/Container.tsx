import React from 'react';
import { callToActionProps } from '../../../types';

interface Props {
  children: React.ReactNode;
  callToAction?: callToActionProps;
}

export const Container = ({ children, callToAction }: Props) => {
  if (callToAction)
    return (
      <a
        href={callToAction.url}
        className="cursor-pointer hover:shadow-xl transition-all duration-500 hover:scale-105 hover:z-10"
      >
        <ContainerWithNoCallToAction>{children}</ContainerWithNoCallToAction>
      </a>
    );
  return <ContainerWithNoCallToAction>{children}</ContainerWithNoCallToAction>;
};

const ContainerWithNoCallToAction = ({ children }: Props) => {
  return (
    <li className="flex justify-center flex-col w-full p-5 ">{children}</li>
  );
};
