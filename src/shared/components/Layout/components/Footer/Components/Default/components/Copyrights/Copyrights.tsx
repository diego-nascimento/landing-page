import React from 'react';

export const Copyrights = () => {
  const handleYear = () => {
    return new Date().getFullYear();
  };
  return (
    <section className="flex justify-center items-center  mt-20 m-12">
      <span className="font-medium text-lg text-gray-500">{`Copyrights © ${handleYear()} Diego Nascimento`}</span>
    </section>
  );
};
