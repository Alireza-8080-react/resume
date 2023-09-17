import { ReactNode } from 'react';

export interface AwardProps {
  /**
   * Default component
   */
  frontComponent: ReactNode;
  /**
   * component when user hovers in card & card flips.
   */
  backComponent: ReactNode;
}
