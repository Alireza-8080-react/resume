'use client';

import { Grid, Typography } from '@mui/material';
import classes from './page.module.scss';
import { CustomizedLinearProgressWithLabel } from '@/components/CustomizedLinearProgressWithLabel';
import { Scrollbar } from '@/components/Scrollbar';
import { SocialMediaIcon } from '@/components/SocialMediaIcon';

const HomePage = () => {
  return (
    <main className='body'>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={12} className={classes.generalInfoContainer}>
          <Typography variant='h2'>Mid-level Front-end Developer</Typography>
          <Typography className={classes.caption}>
            With 2 years of experience of React & Next JS development. Learning at highest speed
            possible.
          </Typography>
          <div className={classes.contactMeButton}>
            <SocialMediaIcon
              href='https://instagram.com/alirezashh8074'
              title='@alirezashh8074'
              icon='instagram'
            />
            <SocialMediaIcon
              href='https://www.linkedin.com/in/alireza-shahmoradi/'
              title='Alireza-Shahmoradi'
              icon='linkedin'
            />
            <SocialMediaIcon
              href='https://t.me/AlirezaShahmoradi80'
              title='@AlirezaShahmoradi80'
              icon='telegram'
            />
            <SocialMediaIcon
              href='https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJTJnslxZFCNZNxfqMZjXlsrDVkPvRWTxVqKSWlpzLbsMMwDqfXvHZVPMNNWsqHwTjLnjpL'
              title='@Alireza.Shahmoaradi.entrepreneur@gmail.com'
              icon='gmail'
            />
          </div>
        </Grid>
        <Grid item lg={1} xs={0} />
        <Grid item lg={6} xs={12}>
          <Scrollbar className={classes.skillsScrollbar}>
            <CustomizedLinearProgressWithLabel label='HTML5' value={70} />
            <CustomizedLinearProgressWithLabel label='CSS3' value={60} />
            <CustomizedLinearProgressWithLabel label='JS' value={30} />
            <CustomizedLinearProgressWithLabel label='React' value={50} />
            <CustomizedLinearProgressWithLabel label='NextJs' value={40} />
            <CustomizedLinearProgressWithLabel label='Material UI' value={65} />
            <CustomizedLinearProgressWithLabel label='SCSS' value={30} />
            <CustomizedLinearProgressWithLabel label='Jest' value={20} />
            <CustomizedLinearProgressWithLabel label='Typescript' value={65} />
            <CustomizedLinearProgressWithLabel label='ReduxJs' value={90} />
            <CustomizedLinearProgressWithLabel label='React hook form' value={70} />
          </Scrollbar>
        </Grid>
        <Grid item lg={1} xs={0} />
      </Grid>
    </main>
  );
};

export default HomePage;
