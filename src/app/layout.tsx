'use client';

import '@/styles/overrides.scss';

import { ThemeProvider } from '@mui/material';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { Header } from '@/components/Header';
import { applicationTheme } from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'A template to create other projects based on',
  title: 'Template App'
};

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
