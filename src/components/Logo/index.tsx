import { Typography } from '@mui/material';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/'>
      <Typography variant='h4' color='primary' component='span'>
        A
      </Typography>
      <Typography variant='h4' component='span'>
        SH
      </Typography>
    </Link>
  );
};
