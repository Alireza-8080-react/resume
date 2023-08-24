import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './index.module.scss';
import { NavbarItemProps } from './models';

export const NavbarItem = ({ title, link, icon }: NavbarItemProps) => {
  const pathName = usePathname();

  return (
    <Link href={link}>
      <Grid container alignItems='center' spacing={1}>
        {icon && (
          <Grid item>
            <i className={`${icon} ${classes.icon} ${pathName === link ? classes.active : ''}`} />
          </Grid>
        )}
        <Grid item>
          <Typography
            variant='h5'
            className={`${pathName === link ? classes.active : ''} ${classes.text}`}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};
