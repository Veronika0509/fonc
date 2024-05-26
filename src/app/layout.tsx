import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "@/theme";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "FONC",
  description: "Узнай количество калорий!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
