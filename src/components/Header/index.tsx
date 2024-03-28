import { GitHub } from '@mui/icons-material';

import { urls } from '@/constants/urls';

import { Grid } from '../Grid';
import { Hidden } from '../Hidden';
import { IconButton } from '../IconButton';
import { Logo } from '../Logo';
import { Navbar } from './_components/Navbar';

const handleOpenGithubRepo = () => {
  window.open(urls.githubRepo, '_blank');
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
                <GitHub />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};
