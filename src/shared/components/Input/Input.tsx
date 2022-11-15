import React, { useState } from 'react';
import { UseFormReturn, FieldErrorsImpl } from 'react-hook-form';
import { motion } from 'framer-motion';

const motionAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: '0.4' },
  exit: {
    opacity: 0,
    transition: {
      duration: '0.3',
      ease: 'easeOut',
    },
  },
};
interface Props {
  tag: 'input' | 'textarea';
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
  tag,
  color,
  errors,
}: Props) => {
  const [focus, setFocus] = useState(false);
  const Tag = tag;

  const handleOnFocusOn = () => {
    setFocus(true);
  };

  const handleOnBlur = () => {
    setFocus(false);
  };

  return (
    <div className="w-full mt-8 relative flex flex-col">
      {focus && (
        <motion.span
          className="font-semibold text-sm absolute -top-5"
          {...motionAnimation}
        >
          {placeholder}
        </motion.span>
      )}
      <Tag
        type={type}
        color={color}
        placeholder={focus ? '' : placeholder}
        {...register(field)}
        className={`w-full bg-gray-200 rounded-md px-4 py-2  placeholder-gray-500 font-semibold  focus:bg-white border-2 resize-none`}
        onFocus={handleOnFocusOn}
        onBlur={handleOnBlur}
      />
      {errors[field]?.message && (
        <motion.span
          className="font-semibold text-sm absolute top-11 text-red-600 pl-1"
          {...motionAnimation}
        >
          {errors[field]?.message?.toString()}
        </motion.span>
      )}
    </div>
  );
};
