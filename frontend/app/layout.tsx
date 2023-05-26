import "../src/styles/globals.css";
import { Providers } from "@/src/redux";

export const metadata = {
  title: 'Spot Finder',
  description: 'Find any place you want',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}
