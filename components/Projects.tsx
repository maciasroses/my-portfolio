"use client"

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Carousel, IconButton } from "@material-tailwind/react";
import { useState } from 'react';
import projects from '@/constants/projects';
import Link from 'next/link';

const Projects = () => {
    const t = useTranslations('Projects')
    const [isTextVisible, setIsTextVisible] = useState(false);

    return (
        <div id='Projects' className='w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-5'>
            <p>{t('title')}</p>
            <Carousel
                className="rounded-xl"
                loop
                autoplay
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        onClick={handlePrev}
                        className="!absolute top-2/4 left-4 -translate-y-2/4 z-30 bg-black/50 hover:border-2 hover:border-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-5 sm:h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4 z-30 bg-black/50 hover:border-2 hover:border-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-5 sm:h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </IconButton>
                )}
            >
                {projects.map(project => (
                    <div key={project.id} className='relative w-full h-full flex justify-center items-center' onMouseEnter={() => setIsTextVisible(true)} onMouseLeave={() => setIsTextVisible(false)}>
                        <Image src={project.img} alt="Project ilustration" width={1880} height={800} className={`${!isTextVisible && 'animate-pulse animate-ease-in animate-duration-[5000ms]'}`} priority />
                        {isTextVisible && (
                            <div className='w-full h-full overflow-y-scroll overflow-x-hidden py-5 px-20 lg:p-10 absolute top-0 flex flex-col justify-start lg:justify-end items-center bg-black/50 animate-fade' onClick={() => setIsTextVisible(false)}>
                                <p className='z-20 text-xl md:text-2xl lg:text-4xl text-white'>{project.title}</p>
                                <p className='z-20 text-base md:text-lg lg:text-2xl text-gray-300'>{t('lan') === 'en' ? project.description : project.description_es}</p>
                                <Link href="/" className='z-20 rounded-xl px-4 py-1 text-white border border-black bg-black hover:border-white'>More</Link>
                            </div>
                        )}
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Projects