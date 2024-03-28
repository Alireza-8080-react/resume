import { Grid } from '../Grid';
import { Typography } from '../Typography';
import { Strength } from './_component/Strength';
import classes from './index.module.scss';

export const Strengths = () => {
  return (
    <div className={classes.container}>
      <Typography variant='h2'>Strengths</Typography>
      <Grid
        container
        justifyContent='space-around'
        alignItems='stretch'
        className={classes.inside_container}
        spacing={4}
      >
        <Grid item xs={12} md={3}>
          <Strength>
            <Typography>
              Proactive in understanding project goals and the bigger business picture. Seeks
              opportunities to optimize workflows and suggest alternative solutions for improved
              efficiency.
            </Typography>
          </Strength>
        </Grid>
        <Grid item xs={12} md={3}>
          <Strength>
            <Typography>
              Deliver tasks swiftly while maintaining code quality and maintainability.
            </Typography>
          </Strength>
        </Grid>
        <Grid item xs={12} md={3}>
          <Strength>
            <Typography>
              Prioritizes writing clean, maintainable, and well-documented code for efficient
              collaboration and future development.
            </Typography>
          </Strength>
        </Grid>
        <Grid item xs={12} md={3}>
          <Strength>
            <Typography>
              Eager to acquire new skills and adapt to evolving technologies, continuously seeking
              opportunities for professional growth.
            </Typography>
          </Strength>
        </Grid>
      </Grid>
    </div>
  );
};
