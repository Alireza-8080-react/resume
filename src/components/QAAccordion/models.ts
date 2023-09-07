import { ReactNode, SyntheticEvent } from 'react';

export interface QAAccordionProps {
  isExpanded: boolean;
  onChange: (event: SyntheticEvent, isExpanded: boolean) => void;
  question: string;
  children: ReactNode;
}
