import Link from 'next/link';

import classes from './index.module.scss';
import { Typography } from '../Typography';

export const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link href='/'>
        <Typography variant='h4' color='primary' component='span'>
          A
        </Typography>
        <Typography variant='h4' component='span'>
          SH
        </Typography>
      </Link>
    </div>
  );
};
