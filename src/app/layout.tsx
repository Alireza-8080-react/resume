'use client';

import '@/styles/overrides.scss';

import { ThemeProvider } from '@mui/material';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { Header } from '@/components/Header';
import { applicationTheme } from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <ThemeProvider theme={applicationTheme}>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
