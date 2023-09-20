"use client"

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from 'next-intl'

const NavBarMenu = ({ otherClases }: { otherClases?: string }) => {
    const t = useTranslations('Navbar');

    return (
        <ul className={`flex justify-center items-center ${otherClases}`}>
            <Link className="w-full pb-4 md:py-4 px-4 md:hover:underline" href='#Home'><li>{t('home')}</li></Link>
            <Link className="w-full p-4 md:hover:underline" href='#About'><li>{t('about')}</li></Link>
            <Link className="w-full p-4 md:hover:underline" href='#Projects'><li>{t('projects')}</li></Link>
            <Link className="w-full p-4 md:hover:underline" href='#Contact'><li>{t('contact')}</li></Link>
            <Link className="w-full p-4 md:hover:underline" href={t('locale')}><li>{t('language')}</li></Link>
        </ul>
    )
}

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="z-50 w-full fixed backdrop-blur bg-white/80 drop-shadow-2xl dark:text-white dark:bg-gray-800/80">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center md:px-16 px-6 py-4 md:py-0">
                <p>Jorge Humberto Macías Romero</p>
                <div className="hidden md:block">
                    <NavBarMenu />
                </div>
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {!menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>

                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </button>
            </nav>
            {menuOpen && <button className="w-full" onClick={() => setMenuOpen(!menuOpen)}><NavBarMenu otherClases="flex-col px-6 md:hidden" /></button>}
        </header>
    )
}

export default Navbar