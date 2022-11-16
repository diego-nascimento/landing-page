import { AccordionComponent } from '@/shared';
import { useControlledAccordion } from '@/shared/hooks';
import React from 'react';

const data = [
  {
    summary: 'How do i do what i want',
    details: 'You do by doing exactly what you want then you want to do',
  },
  {
    summary: 'How do i do what i want',
    details: 'You do by doing exactly what you want then you want to do',
  },
  {
    summary: 'How do i do what i want',
    details: 'You do by doing exactly what you want then you want to do',
  },
  {
    summary: 'How do i do what i want',
    details: 'You do by doing exactly what you want then you want to do',
  },
  {
    summary: 'How do i do what i want',
    details: 'You do by doing exactly what you want then you want to do',
  },
  {
    summary: 'How do i do what i want',
    details: 'You do by doing exactly what you want then you want to do',
  },
  {
    summary: 'How do i do what i want',
    details: 'You do by doing exactly what you want then you want to do',
  },
];

export const Accordions = () => {
  const { expanded, handleChange } = useControlledAccordion();
  return (
    <div className="pt-5 w-full">
      {data.map((item, index) => {
        return (
          <AccordionComponent
            {...item}
            iconColor="#8f42ec"
            key={index}
            id={index}
            expanded={expanded}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
};
