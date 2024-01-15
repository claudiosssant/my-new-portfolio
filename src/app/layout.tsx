import type { Metadata } from 'next'
import { Ropa_Sans } from 'next/font/google'
import './globals.css'

const ropa = Ropa_Sans({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Claudio Santos',
  description: 'Portfolio de Claudio Santos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ropa.className}>{children}</body>
    </html>
  )
}
