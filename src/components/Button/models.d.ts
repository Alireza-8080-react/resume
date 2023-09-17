import { MouseEventHandler, ReactNode } from 'react';

export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
