"use client"

import { useTranslations } from 'next-intl'

const Contact = () => {
    const t = useTranslations('Contact')
    return (
        <div id='Contact' className='w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-5'>
            {t('title')}
        </div>
    )
}

export default Contact