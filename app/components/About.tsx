"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Me from "@/public/macias.webp";
import Link from "next/link";

const About = () => {
  const t = useTranslations("About");
  return (
    <div
      id="About"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-2"
    >
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="Picture of Macias Romero"
            src={Me}
            className="h-48 w-48 rounded-full object-cover object-bottom"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Jorge Humberto Macías Romero
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
            {t("title")}
          </p>
          <div className="flex space-x-5 pt-6">
            <Link
              href="https://github.com/maciasroses"
              target="_blank"
              aria-label="Link to my github account"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-400 duration-300 ease-in-out animate-fade-down"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/maciasromero/"
              target="_blank"
              aria-label="Link to my linked account"
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-400 duration-300 ease-in-out animate-fade-down"
              >
                <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <p key={i}>{t(`about${i + 1}`)}</p>
          ))}
        </div>
      </div>
      <Link
        href="#Projects"
        className="flex flex-col items-center space-y-2 text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-400 duration-300 ease-in-out"
      >
        <p>{t("prebutton")}</p>
        <p className="text-xl md:text-2xl lg:text-4xl font-bold">
          {t("button")}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 md:size-8 lg:size-12 animate-bounce animate-infinite"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
    </div>
  );
};

export default About;