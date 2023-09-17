import { ElementType, ReactNode } from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';

export interface TypographyProps {
  variant?: TypographyVariant;
  className?: string;
  component?: ElementType;
  children: ReactNode;
  color?: string;
  textAlign?: 'center' | 'left' | 'right';
}
