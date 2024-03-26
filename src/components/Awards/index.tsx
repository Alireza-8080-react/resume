import { colorPalette } from '@/constants/colorPalette';

import { Grid } from '../Grid';
import { Typography } from '../Typography';
import { Award } from './_components/Award';
import { awardItems } from './data';
import classes from './index.module.scss';

export const Awards = () => {
  return (
    <div className={classes.container}>
      <Typography variant='h2'>Achievements</Typography>
      <Grid
        container
        justifyContent='space-around'
        className={classes.inside_container}
        spacing={2}
      >
        {awardItems.map((awardItem, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Award
              frontComponent={
                <Typography color={colorPalette.light.foreground} variant='h1'>
                  #{index + 1}
                </Typography>
              }
              backComponent={
                <Grid container direction='column' spacing={2} className={classes.back}>
                  <Grid item>
                    <Typography color={colorPalette.light.foreground} variant='h3'>
                      #{index + 1}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color={colorPalette.light.foreground} variant='body1'>
                      {awardItem}
                    </Typography>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
