import { Link } from '../Link';
import { Typography } from '../Typography';

export const Logo = () => {
  return (
    <div role='img'>
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
