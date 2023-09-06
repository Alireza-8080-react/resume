import { Button, Grid, IconButton, Typography } from '@mui/material';
import classes from './page.module.scss';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className='body'>
      <Grid container>
        <Grid item xl={4} className={classes.generalInfoContainer}>
          <Typography variant='h2'>Mid-level Front-end Developer</Typography>
          <Typography className={classes.caption}>
            With 2 years of experience of React & Next JS development. Learning at highest speed
            possible.
          </Typography>
          <div className={classes.contactMeButton}>
            <IconButton>
              <i className='bx bxl-nodejs' />
            </IconButton>
            <IconButton>
              <i className='bx bxl-react' />
            </IconButton>
            <Link href='/contact-me'>
              <Button variant='contained'>Contact me</Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default HomePage;
