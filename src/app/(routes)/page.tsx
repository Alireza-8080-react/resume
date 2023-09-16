'use client';

import { Grid } from '@mui/material';

import { LinearProgress } from '@/components/LinearProgress';
import { Scrollbar } from '@/components/Scrollbar';
import { SocialMediaIcon } from '@/components/SocialMediaIcon';

import classes from './page.module.scss';
import { Typography } from '@/components/Typography';

const HomePage = () => {
  return (
    <main className='body'>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={12} className={classes.general_info_container}>
          <Typography variant='h2'>Mid-level Front-end Developer</Typography>
          <Typography className={classes.caption}>
            With 2 years of experience of React & Next JS development. Learning at highest speed
            possible.
          </Typography>
          <div className={classes.contact_me_button}>
            <SocialMediaIcon
              href='https://www.linkedin.com/in/alireza-shahmoradi/'
              title='Alireza-Shahmoradi'
              iconClassName='bx bxl-linkedin'
            />
            <SocialMediaIcon
              href='tel:+989037578234'
              title='+98 903 7578 234'
              iconClassName='bx bxs-phone'
            />
            <SocialMediaIcon
              href='https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJTJnslxZFCNZNxfqMZjXlsrDVkPvRWTxVqKSWlpzLbsMMwDqfXvHZVPMNNWsqHwTjLnjpL'
              title='@Alireza.Shahmoaradi.entrepreneur@gmail.com'
              iconClassName='bx bxl-gmail'
            />
          </div>
        </Grid>
        <Grid item lg={1} xs={0} />
        <Grid item lg={6} xs={12}>
          <Scrollbar className={classes.skills_scrollbar}>
            <LinearProgress label='HTML5' value={70} />
            <LinearProgress label='CSS3' value={60} />
            <LinearProgress label='JS' value={30} />
            <LinearProgress label='React' value={50} />
            <LinearProgress label='NextJs' value={40} />
            <LinearProgress label='Material UI' value={65} />
            <LinearProgress label='SCSS' value={30} />
            <LinearProgress label='Jest' value={20} />
            <LinearProgress label='Typescript' value={65} />
            <LinearProgress label='ReduxJs' value={90} />
            <LinearProgress label='React hook form' value={70} />
          </Scrollbar>
        </Grid>
        <Grid item lg={1} xs={0} />
      </Grid>
    </main>
  );
};

export default HomePage;
