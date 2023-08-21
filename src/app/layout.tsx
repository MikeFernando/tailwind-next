/* eslint-disable prettier/prettier */
import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwindcss - NextJS',
  description: 'Site nextjs estilizado com tailwindcss',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className='antialiased'>
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />
          <main className="px-8 pt-8 pb-12">{children}</main>
        </div>
      </body>
    </html>
  )
}
