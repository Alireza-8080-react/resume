import { LinearProgress } from '@mui/material';

import classes from './index.module.scss';
import { CustomizedLinearProgressWithLabelProps } from './models';
import { Typography } from '../Typography';

export const CustomizedLinearProgressWithLabel = ({
  label,
  value
}: CustomizedLinearProgressWithLabelProps) => {
  return (
    <div className={classes.container}>
      <Typography variant='h4'>{label}</Typography>
      <LinearProgress className={classes.progress_bar} variant='determinate' value={value} />
    </div>
  );
};
