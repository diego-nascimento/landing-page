import {
  callToActionProps,
  gridImageProps,
} from '@/shared/components/GridItem/types';
import React from 'react';

interface Props {
  data: gridImageProps;
  callToAction?: callToActionProps;
}

export const ImageComponent = ({ data, callToAction }: Props) => {
  if (!!callToAction)
    return (
      <a href={callToAction.url}>
        <ImageWithNoCallToAction data={data} callToAction={callToAction} />
      </a>
    );
  return <ImageWithNoCallToAction data={data} />;
};

const ImageWithNoCallToAction = ({ data, callToAction }: Props) => {
  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`rounded-full p-14 shadow-xl border-black  transition-all ${
          !!callToAction && 'hover:shadow-2xl group/image hover:scale-110'
        }`}
      >
        <img
          src={data.url}
          alt={data.alt}
          className={`scale-125 ${
            !!callToAction && ' group-hover/image:scale-150'
          }`}
        />
      </div>
    </div>
  );
};
