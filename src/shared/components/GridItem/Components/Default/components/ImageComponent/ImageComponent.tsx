import {
  callToActionProps,
  gridImageProps,
} from '@/shared/components/GridItem/types';
import React from 'react';

interface Props {
  data: gridImageProps;
}

export const ImageComponent = ({ data }: Props) => {
  return (
    <div className={`flex justify-center items-center z-0`}>
      <div
        className={`rounded-full p-14 shadow-xl border-black  transition-all `}
      >
        <img src={data.url} alt={data.alt} className={`scale-125  `} />
      </div>
    </div>
  );
};
