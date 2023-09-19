import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Hind } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const hind = Hind({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {

  let translations;
  try {
    translations = (await import(`../../constants/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${hind.className} dark:bg-gray-800 dark:text-white`}>
        <NextIntlClientProvider locale={locale} messages={translations}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}