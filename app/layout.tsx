'use client'

import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mews Media Admin Panel',
  description: 'Admin dashboard for Mews Media operations and content control.',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname() ?? '' // ✅ Fix here: fallback to empty string

  if (!pathname.startsWith('/admin/login')) {
    // future auth check goes here
  }

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <Toaster position="top-right" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}