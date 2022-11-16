import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { FaPlus } from 'react-icons/fa';

interface Props {
  summary: string;
  details: string;
  iconColor: string;
  expanded: number;
  handleChange: (panel: number) => void;
  id: number;
}

export const AccordionComponent = ({
  details,
  summary,
  iconColor,
  expanded,
  id,
  handleChange,
}: Props) => {
  return (
    <Accordion
      className="w-full border-b-2 rounded-none py-1"
      style={{ boxShadow: 'none' }}
      expanded={expanded === id}
      onChange={() => handleChange(id)}
    >
      <AccordionSummary
        expandIcon={<FaPlus size={10} color={iconColor} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2 className="text-lg font-semibold leading-tight">{summary}</h2>
      </AccordionSummary>
      <AccordionDetails>
        <p className="w-full text-md font-medium text-gray-600">{details}</p>
      </AccordionDetails>
    </Accordion>
  );
};
