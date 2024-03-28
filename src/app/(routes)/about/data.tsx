import Link from 'next/link';

import { urls } from '@/constants/urls';

export const qaItems = [
  {
    answer: `Alireza Shahmoradi | Passionate Programmer

Adept in applying strong problem-solving skills to develop innovative software solutions. Possesses a natural affinity for technology, fostered by a lifelong interest in video games and their underlying programming.`,
    question: 'A short bio'
  },
  {
    answer: `I saw an HTML & CSS video on YouTube & just got curious about it. I
          watched it till the end & followed the road map & learnt js & React & Next js.`,
    question: 'How did I start front-end?'
  },
  {
    answer: (
      <div>
        I started working on
        <span>
          <Link href={urls.azki}> Azki </Link>
        </span>
        since 2021-Oct-02. I'm currently working there.
      </div>
    ),
    question: 'What is my work experience?'
  },
  { answer: `I work on back-office panel.`, question: 'What is your role in Azki?' },
  {
    answer: (
      <div>
        I got my license in <Link href='https://khu.ac.ir/en'>Kharazmi</Link> university
      </div>
    ),
    question: 'Where have you studied?'
  }
] as const;
