import { LinearProgress as MuiLinearProgress } from '@mui/material';

import { Typography } from '../Typography';
import classes from './index.module.scss';
import { LinearProgressWithLabelProps } from './models';

export const LinearProgress = ({ label, value }: LinearProgressWithLabelProps) => {
  return (
    <div className={classes.container}>
      {label && <Typography variant='h4'>{label}</Typography>}
      <MuiLinearProgress className={classes.progress_bar} variant='determinate' value={value} />
    </div>
  );
};
