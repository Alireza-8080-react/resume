"use client";

import Link from "next/link";
import { NavbarItemProps } from "./models";
import { Typography } from "@mui/material";

import classes from "./index.module.scss";
import { usePathname } from "next/navigation";

export const NavbarItem = ({ title, link }: NavbarItemProps) => {
  const pathName = usePathname();

  return (
    <Link href={link}>
      <Typography
        variant="h5"
        className={`${pathName === link ? classes.active : ""} ${classes.text}`}
      >
        {title}
      </Typography>
    </Link>
  );
};
