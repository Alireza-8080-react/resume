import { urls } from '@/constants/urls';

import { Button } from '../Button';
import { Grid } from '../Grid';
import { Hidden } from '../Hidden';
import { IconButton } from '../IconButton';
import { Logo } from '../Logo';
import { Navbar } from './_components/Navbar';
import classes from './index.module.scss';

const handleOpenGithubRepo = () => {
  window.open(urls.githubRepo, '_blank');
};

const handleOpenCV = () => {
  window.open(urls.cv, '_blank');
};

export const Header = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='center' role='main'>
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
              <IconButton onClick={handleOpenGithubRepo}>
                <i className='bx bxl-github' />
              </IconButton>
            </Grid>
            <Grid item>
              <Button color='secondary' variant='outlined' onClick={handleOpenCV}>
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
