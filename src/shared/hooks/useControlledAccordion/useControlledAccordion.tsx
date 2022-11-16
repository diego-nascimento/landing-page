import { useState } from 'react';

export const useControlledAccordion = () => {
  const [expanded, setExpanded] = useState(-1);

  const handleChange = (panel: number) => {
    setExpanded(panel !== expanded ? panel : -1);
  };

  return { handleChange, expanded };
};
