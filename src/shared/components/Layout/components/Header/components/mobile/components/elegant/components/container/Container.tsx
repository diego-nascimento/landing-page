import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
  open: boolean;
}

const motionAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const Container = ({ children, open }: Props) => {
  return (
    open && (
      <motion.div
        className={`w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-80 flex justify-center items-center flex-col`}
        {...motionAnimation}
      >
        {children}
      </motion.div>
    )
  );
};
