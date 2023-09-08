import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import classes from './not-found.module.scss';

const NotFound = () => {
  return (
    <main className='body'>
      <div className={classes.container}>
        <Image src='404.svg' alt='404' width={350} height={350} />
        <Typography variant='h4'>The page you are looking for is not found!</Typography>
        <Link href='/'>
          <Button className={classes.homePageButton} variant='contained'>
            Home page
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
