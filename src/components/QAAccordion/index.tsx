import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QAAccordionProps } from './models';

export const QAAccordion = ({ isExpanded, onChange, question, children }: QAAccordionProps) => {
  return (
    <Accordion expanded={isExpanded} onChange={onChange}>
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
