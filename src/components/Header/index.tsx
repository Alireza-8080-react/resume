import { Grid, Hidden, IconButton } from '@mui/material';

import { Logo } from '../Logo';
import { Navbar } from './_components/Navbar';
import classes from './index.module.scss';
import { Button } from '../Button';

export const Header = () => {
  const handleOpneGithubRepo = () => {
    window.open('https://github.com/Alireza-8080-react/resume', '_blank');
  };

  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Grid item xl={4} lg={4} md={2} sm={6}>
        <Logo />
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={2}>
        <Navbar />
      </Grid>
      <Hidden mdDown>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <IconButton onClick={handleOpneGithubRepo}>
                <i className='bx bxl-github' />
              </IconButton>
            </Grid>
            <Grid item>
              <Button color='secondary' variant='outlined'>
                <span className={classes.download_icon_container}>
                  <i className='bx bxs-download secondaryColor' />
                </span>
                <span>Download CV</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};
