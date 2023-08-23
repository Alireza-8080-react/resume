import { Grid } from "@mui/material";
import { Logo } from "../Logo";
import { Navbar } from "./_components/Navbar";

export const Header = () => {
  return (
    <Grid container>
      <Grid item xl={4}>
        <Logo />
      </Grid>
      <Grid xl={6}>
        <Navbar />
      </Grid>
    </Grid>
  );
};
