import { CircularProgress as MuiCircularProgress } from '@mui/material';
import { CircularProgressProps } from './models';

export const CircularProgress = ({ size }: CircularProgressProps) => {
  return <MuiCircularProgress size={size} />;
};
