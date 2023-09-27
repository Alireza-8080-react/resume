import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export interface LinkProps {
  target?: HTMLAttributeAnchorTarget;
  children: ReactNode;
  href: string;
}
