import { COLOR_PALETTE_FOREGROUND_LIGHT } from '@/constants/colorPalette';

import { Grid } from '../Grid';
import { Typography } from '../Typography';
import { Award } from './_components/Award';
import classes from './index.module.scss';

export const Awards = () => {
  return (
    <div className={classes.container}>
      <Typography variant='h2'>Achievements</Typography>
      <Grid container justifyContent='space-around' className={classes.inside_container}>
        <Grid item xs={10} md={3}>
          <Award
            frontComponent={
              <Typography color={COLOR_PALETTE_FOREGROUND_LIGHT} variant='h1'>
                #1
              </Typography>
            }
            backComponent={
              <Typography color={COLOR_PALETTE_FOREGROUND_LIGHT} variant='h5' textAlign='center'>
                I developed front-side of customized CRM, dynamic-form & ticketing panels solely.
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={10} md={3}>
          <Award
            frontComponent={
              <Typography color={COLOR_PALETTE_FOREGROUND_LIGHT} variant='h1'>
                #2
              </Typography>
            }
            backComponent={
              <Typography color={COLOR_PALETTE_FOREGROUND_LIGHT} variant='h5' textAlign='center'>
                Added location to website to get users address by using Mapbox gl.
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={10} md={3}>
          <Award
            frontComponent={
              <Typography color={COLOR_PALETTE_FOREGROUND_LIGHT} variant='h1'>
                #3
              </Typography>
            }
            backComponent={
              <Typography color={COLOR_PALETTE_FOREGROUND_LIGHT} variant='h5' textAlign='center'>
                Refactored many areas of project: Convert class components into functional Add ts &
                es-lint with custom strict rules Used React-hook-form for forms As insurance has
                many if-elses (logics) I learnt how to handle many scenarios.
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};
