import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AirBridge  - P2P File Sharing',
  description: 'Securely share files peer-to-peer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>


<main className="relative z-10 min-h-screen bg-transparent text-white">
          {children}
        </main>
      </body>
    </html>
  )
}
