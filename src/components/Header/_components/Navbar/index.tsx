import { Button, Grid, Hidden } from "@mui/material";
import { NavbarItem } from "./_components/NavbarItem";
import { useState } from "react";
import { NavbarDrawer } from "./_components/NavbarDrawer";

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
            <NavbarItem title="home" link="/" />
          </Grid>
          <Grid item>
            <NavbarItem title="about" link="/about" />
          </Grid>
          <Grid item>
            <NavbarItem title="else" link="/else" />
          </Grid>
          <Grid item>
            <NavbarItem title="sth" link="/sth" />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Button variant="outlined" onClick={handleOpenDrawer}>
          Hello
        </Button>
        <NavbarDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      </Hidden>
    </>
  );
};
