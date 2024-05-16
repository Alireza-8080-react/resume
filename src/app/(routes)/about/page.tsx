'use client';

import { SyntheticEvent, useState } from 'react';

import { QAAccordion } from '@/components/QAAccordion';
import { Strengths } from '@/components/Strengths';

import { qaItems } from './data';
import classes from './index.module.scss';

const AboutPage = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {qaItems.map((qaItem, index) => (
        <QAAccordion
          isExpanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className={classes.qa_accordion}
          question={qaItem.question}
          key={index}
          style={{ animationDuration: `${0.5 * (index + 1)}s` }}
        >
          {qaItem.answer}
        </QAAccordion>
      ))}
      <Strengths />
    </>
  );
};

export default AboutPage;
