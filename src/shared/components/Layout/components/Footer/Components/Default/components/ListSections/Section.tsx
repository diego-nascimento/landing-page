import React, { useMemo } from 'react';

interface Props {
  children: React.ReactNode;
  amountOfItens: number;
}

const grids = [
  '',
  '',
  'grid-cols-2',
  'md:grid-cols-3 grid-cols-2',
  'lg:grid-cols-4 md:grid-cols-3 grid-cols-2',
  'lg:grid-cols-5 md:grid-cols-3 grid-cols-2',
  'lg:grid-cols-6 md:grid-cols-3 grid-cols-2',
];

export const ListSections = (data: Props) => {
  const grid = useMemo(() => {
    switch (data.amountOfItens) {
      case 6:
      case 5:
      case 4:
      case 3:
      case 2:
      case 1:
      case 0:
        return grids[data.amountOfItens];
      default:
        return grids[Math.round(data.amountOfItens / 2)];
    }
  }, [data]);
  return (
    <ul className={`grid ${grid}  gap-y-8 md:pd-0 mt-20`}>{data.children}</ul>
  );
};
