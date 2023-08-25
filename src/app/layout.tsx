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
        <div className="min-h-screen mx-auto lg:grid lg:grid-cols-app">
          <Sidebar />
          <main className="px-4 pt-24 pb-12 lg:col-start-2 lg:px-8 lg:pt-8 lg:pb-12 mx-w-[100vw]">{children}</main>
        </div>
      </body>
    </html>
  )
}
