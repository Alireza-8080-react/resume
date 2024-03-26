import { IconButton as MuiIconButton } from '@mui/material';

import { IconButtonProps } from './models';

export const IconButton = ({ size, children, onClick, className }: IconButtonProps) => {
  return (
    <MuiIconButton size={size} onClick={onClick} className={className}>
      {children}
    </MuiIconButton>
  );
};
