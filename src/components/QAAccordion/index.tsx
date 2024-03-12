import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import { Typography } from '../Typography';
import { QAAccordionProps } from './models';

export const QAAccordion = ({
  isExpanded,
  onChange,
  question,
  children,
  className,
  style
}: QAAccordionProps) => {
  return (
    <Accordion expanded={isExpanded} onChange={onChange} style={style} className={className}>
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
