import { LinearProgress as MuiLinearProgress } from '@mui/material';

import classes from './index.module.scss';
import { LinearProgressWithLabelProps } from './models';
import { Typography } from '../Typography';

export const LinearProgress = ({ label, value }: LinearProgressWithLabelProps) => {
  return (
    <div className={classes.container}>
      {label && <Typography variant='h4'>{label}</Typography>}
      <MuiLinearProgress className={classes.progress_bar} variant='determinate' value={value} />
    </div>
  );
};
