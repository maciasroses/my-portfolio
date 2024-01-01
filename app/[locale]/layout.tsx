import { Footer, Navbar, Provider } from "@/app/components";
import "./globals.css";
import type { Metadata } from "next";
import { Hind } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const hind = Hind({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JMa",
  description:
    "Welcome to my portfolio, This is where our journey begins, working together as a dynamic team to create the best product for your business. Let's turn your vision into reality!",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let translations;
  try {
    translations = (await import(`../constants/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${hind.className} dark:text-white`}>
        <NextIntlClientProvider locale={locale} messages={translations}>
          <Provider>
            <div className="fixed top-0 z-[-2] h-screen w-screen dark:bg-[#202124FF] bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,0,0,0.12)_0,rgba(255,165,0,0)_50%,rgba(255,165,0,0)_100%)]"></div>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
