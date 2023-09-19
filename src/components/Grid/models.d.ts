import { AriaRole, ReactNode } from 'react';

export type GridSize = 'auto' | number;
export type AlignItems = 'flex-end' | 'flex-start' | 'center' | 'stretch' | 'baseline';
export type JustifyContent =
  | 'flex-end'
  | 'flex-start'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface GridProps {
  item?: boolean;
  container?: boolean;
  spacing?: number | string;
  lg?: boolean | GridSize;
  md?: boolean | GridSize;
  sm?: boolean | GridSize;
  xl?: boolean | GridSize;
  xs?: boolean | GridSize;
  children?: ReactNode;
  className?: string;
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  role?: AriaRole;
}
