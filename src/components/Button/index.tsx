import { Button as MuiButton } from '@mui/material';

import { ButtonProps } from './models';

export const Button = ({ children, className, variant, color, onClick }: ButtonProps) => {
  return (
    <MuiButton className={className} variant={variant} onClick={onClick} color={color}>
      {children}
    </MuiButton>
  );
};
