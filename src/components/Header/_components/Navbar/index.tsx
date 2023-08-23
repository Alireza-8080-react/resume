import { Grid } from "@mui/material";
import { NavbarItem } from "./_components/NavbarItem";

export const Navbar = () => {
  return (
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
  );
};
