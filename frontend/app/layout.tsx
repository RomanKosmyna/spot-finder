import { Providers } from "@/src/redux";
import { Roboto } from 'next/font/google';

import "../src/styles/globals.css";

export const metadata = {
  title: "Spot Finder",
  description: "Find any place you want",
};

const roboto = Roboto({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={roboto.className}>
    <body>
    <Providers>
      <div id={"next"}>
        {children}
      </div>
    </Providers>
    </body>
    </html>
  );
}
