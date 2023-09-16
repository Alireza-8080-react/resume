import { IconButton as MuiIconButton } from '@mui/material';
import { IconButtonProps } from './models';

export const IconButton = ({ size, children, onClick }: IconButtonProps) => {
  return (
    <MuiIconButton size={size} onClick={onClick}>
      {children}
    </MuiIconButton>
  );
};
