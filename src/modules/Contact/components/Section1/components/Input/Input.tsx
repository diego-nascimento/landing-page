import React from 'react';
import { UseFormReturn, FieldErrorsImpl } from 'react-hook-form';

interface Props {
  type: 'text' | 'number';
  placeholder: string;
  color: string;
  register: UseFormReturn['register'];
  field: string;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

export const Input = ({
  type = 'text',
  placeholder,
  register,
  field,
  color,
}: Props) => {
  return (
    <input
      type={type}
      color={color}
      placeholder={placeholder}
      {...register(field)}
      className={`w-full bg-gray-200 rounded-md px-4 py-2 mt-5 placeholder-gray-500 font-semibold  focus:bg-white border-2 `}
    />
  );
};
