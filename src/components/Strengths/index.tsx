import { Grid } from '../Grid';
import { Typography } from '../Typography';
import { Strength } from './_component/Strength';
import classes from './index.module.scss';

export const Strengths = () => {
  return (
    <Grid container className={classes.container} justifyContent='space-around' spacing={4}>
      <Grid item xs={12} md={3}>
        <Strength>
          <Typography textAlign='center'>
            I love business. So my job is not just to code. I like to know the reason behind doing
            every single task & give other solutions if any comes to my mind.
          </Typography>
        </Strength>
      </Grid>
      <Grid item xs={12} md={3}>
        <Strength>
          <Typography textAlign='center'>
            Super fast at doing tasks. Don't get me wrong here. I write clean code.
          </Typography>
        </Strength>
      </Grid>
      <Grid item xs={12} md={3}>
        <Strength>
          <Typography textAlign='center'>Love cleaning codes.</Typography>
        </Strength>
      </Grid>
      <Grid item xs={12} md={3}>
        <Strength>
          <Typography textAlign='center'>Love learning new things & growing up fast.</Typography>
        </Strength>
      </Grid>
    </Grid>
  );
};
