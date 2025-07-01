import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Arish Panjwani",
  description: 'Created with <3',
 icons: {
    icon: "/logo.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
