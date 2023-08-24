import { Grid } from '@mui/material';

import { Logo } from '../Logo';
import { Navbar } from './_components/Navbar';

export const Header = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Grid item xl={5} lg={5} md={7} sm={7} xs>
        <Logo />
      </Grid>
      <Grid item xl={7} lg={7} md={5} sm={2}>
        <Navbar />
      </Grid>
    </Grid>
  );
};
