import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import { QAAccordionProps } from './models';
import { Typography } from '../Typography';

export const QAAccordion = ({
  isExpanded,
  onChange,
  question,
  children,
  className
}: QAAccordionProps) => {
  return (
    <Accordion expanded={isExpanded} onChange={onChange} className={className}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography variant='h6'>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='h6'>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
