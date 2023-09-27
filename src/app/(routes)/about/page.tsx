'use client';

import { SyntheticEvent, useState } from 'react';

import { Link } from '@/components/Link';
import { QAAccordion } from '@/components/QAAccordion';
import { Strengths } from '@/components/Strengths';
import { urls } from '@/constants/urls';

import classes from './index.module.scss';

const AboutPage = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <main>
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
          <Link href={urls.azki}> Azki </Link>
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
        question='Where have you studied?'
      >
        I got my license in <Link href='https://khu.ac.ir/en'>Kharazmi</Link> university
      </QAAccordion>
      <Strengths />
    </main>
  );
};

export default AboutPage;
