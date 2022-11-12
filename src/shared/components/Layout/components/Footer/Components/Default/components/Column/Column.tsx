import { Title } from '@/shared/components/Typography';
import Link from 'next/link';
import React from 'react';
import { FooterSection } from '../../../../Container/types';

export const Column = (data: FooterSection) => {
  return (
    <li>
      <h2
        key={data.id}
        className="text-lg font-semibold uppercase mb-3 tracking-wider text-black"
      >
        {data.title}
      </h2>
      <ul className="flex flex-col gap-1">
        {data.itens.map((item) => {
          return (
            <Link href={item.url} passHref key={item.id}>
              <li className="text-md text-gray-500 capitalize ">
                {item.label}
              </li>
            </Link>
          );
        })}
      </ul>
    </li>
  );
};
