'use client';

import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';

import { QAAccordion } from '@/components/QAAccordion';

import classes from './index.module.scss';

const AboutPage = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <main className='body'>
      <QAAccordion
        isExpanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className={`${classes.qa_accordion}`}
        question='A short bio'
      >
        I'm Alireza Shahmoradi. Born in 2001-Sep-21. I loved playing video games from childhood so I
        loved computer since then. I loved to be able to write programs instead of just using them.
      </QAAccordion>
      <QAAccordion
        isExpanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className={`${classes.qa_accordion} ${classes.accordion2}`}
        question='How did I start front-end?'
      >
        I started it by chance! I saw an HTML & CSS video on YouTube & just got curious about it. I
        watched it till the end & followed the road map & learnt js & React & Next js & all the good
        stuff
      </QAAccordion>
      <QAAccordion
        isExpanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        className={`${classes.qa_accordion} ${classes.accordion3}`}
        question='Tell us about your work experience'
      >
        I started working on
        <span>
          <Link href='https://azki.com' target='_blank'>
            {' '}
            Azki{' '}
          </Link>
        </span>
        since 2021-Oct-02. I work there till now.
      </QAAccordion>
      <QAAccordion
        isExpanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        className={`${classes.qa_accordion} ${classes.accordion4}`}
        question='What was your role in Azki?'
      >
        I worked on back-office panel.
      </QAAccordion>
      <QAAccordion
        isExpanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        className={`${classes.qa_accordion} ${classes.accordion5}`}
        question='What are your achievements?'
      >
        <ul>
          <li>I developed front-side of customized CRM, dynamic-form & ticketing panels solely.</li>
          <li>Added location to website to get users address by using Mapbox gl.</li>
          <li>
            Refactored many areas of project: Convert class components into functional Add ts &
            es-lint with custom strict rules Used React-hook-form for forms As insurance has many
            if-elses (logics) I learnt how to handle many scenarios.
          </li>
        </ul>
      </QAAccordion>
      <QAAccordion
        isExpanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
        className={`${classes.qa_accordion} ${classes.accordion6}`}
        question='What are your strengths?'
      >
        <ul>
          <li>
            I love business. So my job is not just to code. I like to know the reason behind doing
            every single task & give other solutions if any comes to my mind.
          </li>
          <li>Super fast at doing tasks. Don't get me wrong here. I write clean code.</li>
          <li>Love cleaning codes.</li>
          <li>Love learning new things & growing up fast.</li>
        </ul>
      </QAAccordion>
    </main>
  );
};

export default AboutPage;
