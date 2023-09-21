"use client"

import { useTranslations } from 'next-intl'

const Home = () => {
    const t = useTranslations('Home')
    return (
        <div id='Home' className='w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-5'>
            <p className='text-4xl md:text-6xl lg:text-8xl animate-fade-down animate-duration-[2000ms]'>{t('title')}</p>
            <button className='px-6 py-3 text-xl md:text-2xl lg:text-4xl rounded-2xl border-2 border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black animate-fade-down animate-duration-[2000ms] animate-delay-[2000ms]'>{t('button')}</button>
        </div>
    )
}

export default Home