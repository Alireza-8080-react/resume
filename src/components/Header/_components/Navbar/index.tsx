import { Grid } from "@mui/material";
import { NavbarItem } from "./_components/NavbarItem";

export const Navbar = () => {
  return (
    <Grid container>
      <Grid item>
        <NavbarItem title="home" link="/home" />
      </Grid>
      {/* <Grid item>
        <NavbarItem />
      </Grid>
      <Grid item>
        <NavbarItem />
      </Grid>
      <Grid item>
        <NavbarItem />
      </Grid> */}
    </Grid>
  );
};
