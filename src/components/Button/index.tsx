import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from './models';

export const Button = ({ children, className, variant, onClick }: ButtonProps) => {
  return (
    <MuiButton className={className} variant={variant} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
