'use client';

import '@/styles/overrides.scss';
import '@/styles/general.scss';

import { ThemeProvider, responsiveFontSizes, useMediaQuery } from '@mui/material';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { Header } from '@/components/Header';
import { applicationTheme } from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <html lang='en'>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <ThemeProvider theme={responsiveFontSizes(applicationTheme(prefersDarkMode))}>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
