import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Hind } from "next/font/google"
import translations from '@/constants/translations'

const hind = Hind({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={hind.className}>
        <Navbar translations={translations.en.navbar} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
