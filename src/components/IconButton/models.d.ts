import { MouseEventHandler, ReactNode } from 'react';

export type IconButtonSize = 'small' | 'medium' | 'large';

export interface IconButtonProps {
  children?: ReactNode;
  size?: IconButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
