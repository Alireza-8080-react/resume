import { Tooltip as MuiTooltip } from '@mui/material';
import { TooltipProps } from './models';

export const Tooltip = ({ title, children }: TooltipProps) => {
  return <MuiTooltip title={title}>{children}</MuiTooltip>;
};
