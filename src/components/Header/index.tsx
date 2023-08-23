import { Grid } from "@mui/material";
import { Logo } from "../Logo";
import { Navbar } from "./_components/Navbar";

export const Header = () => {
  return (
    <Grid container>
      <Grid item xl={4} lg={4} md={6} sm={5}>
        <Logo />
      </Grid>
      <Grid item xl={8} lg={8} md={6} sm={7}>
        <Navbar />
      </Grid>
    </Grid>
  );
};
