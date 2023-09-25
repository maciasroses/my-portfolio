"use client"

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ThemeButton from "./Themebutton";
import { useRouter } from "next/navigation";

const NavButton = ({ isTop, onClick, title }: { isTop?: boolean, onClick: any, title: string }) => {
    return <button type="button" className={`${isTop ? 'pb-4 px-4' : 'p-4'}`} onClick={onClick}><li>{title}</li></button>;
}

const Navbar = () => {
    const t = useTranslations('Navbar');
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuHandler = (link: string) => {
        router.push(link);
        setMenuOpen(false);
    }

    return (
        <header className="z-50 w-full fixed backdrop-blur bg-white/80 drop-shadow-2xl dark:text-white dark:bg-gray-800/80">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center md:px-16 px-6 py-4 md:py-0">
                <p>Jorge Humberto Macías Romero</p>
                <div className="flex space-x-4 md:space-x-0">
                    <div className="hidden md:block">
                        <ul className='flex justify-center items-center'>
                            <Link className="p-4 hover:underline" href='#Home'><li>{t('home')}</li></Link>
                            <Link className="p-4 hover:underline" href='#About'><li>{t('about')}</li></Link>
                            <Link className="p-4 hover:underline" href='#Projects'><li>{t('projects')}</li></Link>
                            <Link className="p-4 hover:underline" href='#Contact'><li>{t('contact')}</li></Link>
                            <Link className="p-4 hover:underline" href={t('locale')}><li>{t('language')}</li></Link>
                        </ul>
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
                    <ThemeButton />
                </div>
            </nav>
            {menuOpen &&
                <ul className='flex justify-center items-center flex-col px-6 md:hidden'>
                    <NavButton isTop={true} onClick={() => menuHandler("#Home")} title={t('home')} />
                    <NavButton onClick={() => menuHandler("#About")} title={t('about')} />
                    <NavButton onClick={() => menuHandler("#Projects")} title={t('projects')} />
                    <NavButton onClick={() => menuHandler("#Contact")} title={t('contact')} />
                    <Link className="p-4" href={t('locale')}><li>{t('language')}</li></Link>
                </ul>
            }
        </header>
    );
};

export default Navbar;