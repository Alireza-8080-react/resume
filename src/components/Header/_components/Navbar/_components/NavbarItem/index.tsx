import { usePathname } from 'next/navigation';

import { Grid } from '@/components/Grid';
import { Link } from '@/components/Link';
import { Typography } from '@/components/Typography';

import classes from './index.module.scss';
import { NavbarItemProps } from './models';

export const NavbarItem = ({ title, link, children, target }: NavbarItemProps) => {
  const pathName = usePathname();

  return (
    <Link href={link} target={target}>
      <Grid container alignItems='center' spacing={1}>
        {children && (
          <Grid item>
            <div className={`${classes.icon} ${pathName === link ? classes.active : ''}`}>
              {children}
            </div>
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
