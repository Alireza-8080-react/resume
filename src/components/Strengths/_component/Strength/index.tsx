import Image from 'next/image';

import { Grid } from '@/components/Grid';

import classes from './index.module.scss';
import { StrengthProps } from './models';

export const Strength = ({ children }: StrengthProps) => {
  return (
    <Grid container direction='column' alignItems='center' className={classes.container}>
      <Grid item>
        <Image src='/images/strength.png' alt='strength' width={200} height={200} />
      </Grid>
      <Grid item className={classes.text}>
        {children}
      </Grid>
    </Grid>
  );
};
