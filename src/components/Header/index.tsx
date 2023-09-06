import { Button, Grid, Hidden } from '@mui/material';

import { Logo } from '../Logo';
import { Navbar } from './_components/Navbar';

import classes from './index.module.scss';

export const Header = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Grid item xl={4} lg={4} md={2} sm={6}>
        <Logo />
      </Grid>
      <Grid item xl={6} lg={6} md={5} sm={2}>
        <Navbar />
      </Grid>
      <Hidden mdDown>
        <Grid item>
          <Button color='secondary' variant='outlined'>
            <span className={classes.downloadIconContainer}>
              <i className='bx bxs-download secondaryColor' />
            </span>
            <span>Download CV</span>
          </Button>
        </Grid>
      </Hidden>
    </Grid>
  );
};
