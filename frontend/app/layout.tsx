import "../src/styles/globals.css";

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
      <body>{children}</body>
    </html>
  )
}
