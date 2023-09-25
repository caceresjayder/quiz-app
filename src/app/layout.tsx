'use client'
import AppContext from '@/Libs/Context'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Medic Quiz App',
//   description: 'Wrote by https://github.com/caceresjayder',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <AppContext>
        {children}
        </AppContext>
        </body>
    </html>
  )
}
