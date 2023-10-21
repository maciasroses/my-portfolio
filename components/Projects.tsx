"use client"

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Carousel, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import projects from '@/constants/projects';
import ProjectPopUp from './ProjectPopUp';

const Projects = () => {
    const t = useTranslations('Projects')
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [modal, SetModal] = useState(false);
    const [projectSelected, setProjectSelected] = useState(projects[0]);

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modal]);

    return (
        <div id='Projects' className='w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-5'>
            {modal && (
                <ProjectPopUp lan={t('lan')} project={projectSelected} onClick={() => SetModal(false)} />
            )}
            <p>{t('title')}</p>
            <Carousel
                className="rounded-xl"
                loop
                autoplay
                autoplayDelay={7000}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-2 p-1 bg-black/50 rounded-full">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
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
                        className="!absolute top-2/4 left-4 -translate-y-2/4 z-30 bg-black/50 hover:border-2 hover:border-white hidden sm:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4 z-30 bg-black/50 hover:border-2 hover:border-white hidden sm:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </IconButton>
                )}
            >
                {projects.map(project => (
                    <div key={project.id} className='relative w-full h-full flex justify-center items-center' onMouseEnter={() => setIsTextVisible(true)} onMouseLeave={() => setIsTextVisible(false)}>
                        <Image src={project.img} alt="Project ilustration" width={1880} height={800} className={`${!isTextVisible && 'animate-pulse animate-ease-in animate-duration-[5000ms]'}`} priority />
                        {isTextVisible && (
                            <div className='w-full h-full py-5 px-20 sm:p-10 absolute flex flex-col justify-center sm:justify-end items-center bg-black/50 animate-fade' onClick={() => setIsTextVisible(false)}>
                                <p className='z-20 text-xl md:text-2xl lg:text-4xl text-white'>{project.title}</p>
                                <p className='z-20 text-base md:text-lg lg:text-2xl text-gray-300 hidden sm:block'>{t('lan') === 'en' ? project.description : project.description_es}</p>
                                <button onClick={() => { SetModal(true); setProjectSelected(project) }} className='z-20 rounded-xl px-4 py-1 text-white border border-black bg-black hover:border-white duration-300 ease-in-out'>{t('lan') === 'en' ? 'More' : 'Más'}</button>
                            </div>
                        )}
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Projects