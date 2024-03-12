import { CSSProperties, ReactNode, SyntheticEvent } from 'react';

export interface QAAccordionProps {
  isExpanded: boolean;
  onChange: (event: SyntheticEvent, isExpanded: boolean) => void;
  /**
   * shown in accordion summary
   */
  question: string;
  /**
  The component rendered in accordion
  */
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
