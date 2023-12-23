"use client"

import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('Footer')
    return (
        <footer className="w-full bg-gray-100 dark:bg-black dark:text-white">
            <div className="max-w-[1440px] mx-auto flex justify-center items-center sm:px-16 px-6 py-4">
                {t('title')}
            </div>
        </footer>
    )
}

export default Footer