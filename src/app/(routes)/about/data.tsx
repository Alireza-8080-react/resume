import Link from 'next/link';

import { urls } from '@/constants/urls';

export const qaItems = [
  {
    answer: `I'm Alireza Shahmoradi. Born in 2001-Sep-21. I loved playing video games from childhood so I
              loved computer since then. I loved to be able to write programs instead of just using them.`,
    question: 'A short bio'
  },
  {
    answer: `        I started it by chance! I saw an HTML & CSS video on YouTube & just got curious about it. I
          watched it till the end & followed the road map & learnt js & React & Next js & all the good
          stuff`,
    question: 'How did I start front-end?'
  },
  {
    answer: (
      <div>
        I started working on
        <span>
          <Link href={urls.azki}> Azki </Link>
        </span>
        since 2021-Oct-02. I work there till now.
      </div>
    ),
    question: 'Tell us about your work experience'
  },
  { answer: `I worked on back-office panel.`, question: 'What was your role in Azki?' },
  {
    answer: (
      <div>
        I got my license in <Link href='https://khu.ac.ir/en'>Kharazmi</Link> university
      </div>
    ),
    question: 'Where have you studied?'
  }
] as const;
