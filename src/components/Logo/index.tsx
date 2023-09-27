import { Link } from '../Link';
import { Typography } from '../Typography';
import classes from './index.module.scss';

export const Logo = () => {
  return (
    <div className={classes.logo} role='img'>
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
