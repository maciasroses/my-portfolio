"use client"

import { useTranslations } from 'next-intl'

const Contact = () => {
    const t = useTranslations('Contact')
    return (
        <div id='Contact' className='w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-5'>
            {/* {t('title')} */}
            <form className='w-full md:w-[80%]'>
                <div className='flex flex-col md:flex-row gap-4 mb-4 w-full'>
                    <input
                        className='py-2 border-b-2 border-black dark:border-white bg-transparent focus:outline-none w-full md:w-1/2'
                        type='text'
                        name='name'
                        placeholder={t('name')}
                    />
                    <input
                        className='py-2 border-b-2 border-black dark:border-white bg-transparent focus:outline-none w-full md:w-1/2'
                        type='email'
                        name='email'
                        placeholder={t('email')}
                    />
                </div>
                <textarea
                    className='py-2 border-b-2 mb-4 border-black dark:border-white bg-transparent focus:outline-none w-full min-h-[50px]'
                    name='message'
                    placeholder={t('message')}
                />
                <button className='px-4 py-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white  duration-300 ease-in-out'>
                    {t('button')}
                </button>
            </form>
        </div>
    )
}

export default Contact