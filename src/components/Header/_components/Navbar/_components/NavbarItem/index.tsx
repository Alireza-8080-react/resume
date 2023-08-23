import Link from "next/link";
import { NavbarItemProps } from "./models";
import { Typography } from "@mui/material";

import classes from "./index.module.scss";

export const NavbarItem = ({ title, link }: NavbarItemProps) => {
  return (
    <Link href={link} className={classes.link}>
      <Typography variant="h5">{title}</Typography>
    </Link>
  );
};
