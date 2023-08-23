import { Grid } from "@mui/material";
import { Logo } from "../Logo";
import { Navbar } from "./_components/Navbar";

export const Header = () => {
  return (
    <Grid container>
      <Grid item xl={5} lg={5} md={6} sm={5}>
        <Logo />
      </Grid>
      <Grid item xl={7} lg={7} md={6} sm={7}>
        <Navbar />
      </Grid>
    </Grid>
  );
};
