import { Button, Grid, Hidden } from '@mui/material';
import { useState } from 'react';

import { NavbarDrawer } from './_components/NavbarDrawer';
import { NavbarItem } from './_components/NavbarItem';
import classes from './index.module.scss';

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Hidden mdDown>
        <Grid container spacing={6}>
          <Grid item>
            <NavbarItem title='Home' link='/' />
          </Grid>
          <Grid item>
            <NavbarItem title='About' link='/about' />
          </Grid>
          <Grid item>
            <NavbarItem title='Else' link='/else' />
          </Grid>
          <Grid item>
            <NavbarItem title='Sth' link='/sth' />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Button
          variant='outlined'
          onClick={handleOpenDrawer}
          className={`${isDrawerOpen ? 'bx bxs-down-arrow' : 'bx bxs-up-arrow'} ${classes.icon}`}
        />
        <NavbarDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      </Hidden>
    </>
  );
};
