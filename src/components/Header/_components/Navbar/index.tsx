import { useState } from 'react';

import { Button } from '@/components/Button';
import { Grid } from '@/components/Grid';
import { Hidden } from '@/components/Hidden';

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
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Button variant='outlined' onClick={handleOpenDrawer}>
          <i
            className={`${isDrawerOpen ? classes.opened_icon : ''} bx bxs-up-arrow ${classes.icon}`}
          />
        </Button>
        <NavbarDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      </Hidden>
    </>
  );
};
