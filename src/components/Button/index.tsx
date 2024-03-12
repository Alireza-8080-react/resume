import { Button as MuiButton } from '@mui/material';

import { ButtonProps } from './models';

export const Button = ({
  children,
  className,
  variant,
  color,
  onClick,
  startIcon
}: ButtonProps) => {
  return (
    <MuiButton
      className={className}
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      color={color}
    >
      {children}
    </MuiButton>
  );
};
