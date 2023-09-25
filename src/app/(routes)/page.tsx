'use client';

import { Awards } from '@/components/Awards';
import { Grid } from '@/components/Grid';
import { LinearProgress } from '@/components/LinearProgress';
import { Scrollbar } from '@/components/Scrollbar';
import { SocialMediaIcon } from '@/components/SocialMediaIcon';
import { Typography } from '@/components/Typography';
import { urls } from '@/constants/urls';

import classes from './page.module.scss';

const HomePage = () => {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item lg={4} xs={12} className={classes.general_info_container}>
          <Typography variant='h2'>Mid-level Front-end Developer</Typography>
          <Typography className={classes.caption}>
            With 2 years of experience of React & Next JS development. Learning at highest speed
            possible.
          </Typography>
          <div className={classes.contact_me_button}>
            <SocialMediaIcon
              href={urls.linkedIn}
              title='Alireza-Shahmoradi'
              iconClassName='bx bxl-linkedin'
            />
            <SocialMediaIcon
              href='tel:+989037578234'
              title='+98 903 7578 234'
              iconClassName='bx bxs-phone'
            />
            <SocialMediaIcon
              href={urls.gmail}
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
            <LinearProgress label='JS' value={50} />
            <LinearProgress label='React' value={60} />
            <LinearProgress label='NextJs' value={50} />
            <LinearProgress label='Material UI' value={65} />
            <LinearProgress label='SCSS' value={40} />
            <LinearProgress label='Jest' value={20} />
            <LinearProgress label='Typescript' value={65} />
            <LinearProgress label='ReduxJs' value={90} />
            <LinearProgress label='React hook form' value={70} />
            <LinearProgress label='Storybook' value={40} />
          </Scrollbar>
        </Grid>
        <Grid item lg={1} xs={0} />
        <Grid item xs={12}>
          <Awards />
        </Grid>
      </Grid>
    </main>
  );
};

export default HomePage;
