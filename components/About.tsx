"use client"

import { useTranslations } from 'next-intl'

const About = () => {
    const t = useTranslations('About')
    return (
        <div id='About' className='w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-5'>
            {t('title')}
        </div>
    )
}

export default About