import { useRouter } from 'next/router';
import React from 'react';
import { Props } from '../Product';

export const Description = (data: Props) => {
  return (
    <aside className="px-5 md:p-10 flex flex-col justify-center">
      <h2
        className="font-bold text-4xl md:text-6xl select-none"
        style={{ color: data.color }}
      >
        {data.title}
      </h2>
      <p className="mt-5 text-gray-400  text-md md:text-lg font-medium ">
        {data.description}
      </p>
      <a
        href={data.callToAction}
        className="w-full flex justify-center md:justify-start"
      >
        <button
          className="mt-5 flex justify-center items-center  md:self-start w-52 px-4 py-2 md:px-10 md:py-4 rounded-full text-white font-bold uppercase select-none text-md "
          style={{ backgroundColor: data.color }}
        >
          Saiba mais
        </button>
      </a>
    </aside>
  );
};
