import { ThemeProvider } from "@mui/material";
import "@/styles/overrides.scss";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { applicationTheme } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "A template to create other projects based on",
  title: "Template App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={applicationTheme}>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
