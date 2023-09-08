import { LinearProgress, Typography } from '@mui/material';

import classes from './index.module.scss';
import { CustomizedLinearProgressWithLabelProps } from './models';

export const CustomizedLinearProgressWithLabel = ({
  label,
  value
}: CustomizedLinearProgressWithLabelProps) => {
  return (
    <div className={classes.container}>
      <Typography variant='h4'>{label}</Typography>
      <LinearProgress className={classes.progressBar} variant='determinate' value={value} />
    </div>
  );
};
