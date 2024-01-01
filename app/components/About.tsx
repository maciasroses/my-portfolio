"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Me from "@/public/macias.webp";
import Link from "next/link";
import { DownArrow, Github, LinkedIn } from "./icons";

const About = () => {
  const t = useTranslations("About");
  return (
    <section
      id="About"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-2"
    >
      <article className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="Picture of Macias Romero"
            src={Me}
            className="size-48 rounded-full object-cover object-bottom"
          />
          <h1 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Jorge Humberto Macías Romero
          </h1>
          <p className="text-center">{t("title")}</p>
          <div className="flex space-x-5 pt-6">
            <Link
              href="https://github.com/maciasroses"
              target="_blank"
              aria-label="Link to my github account"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/maciasromero/"
              target="_blank"
              aria-label="Link to my linked account"
            >
              <LinkedIn />
            </Link>
          </div>
        </div>
        <div className="prose max-w-none prose-lg pt-8 pb-8 dark:prose-invert xl:col-span-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <p key={i}>{t(`about${i + 1}`)}</p>
          ))}
        </div>
      </article>
      <Link
        href="#Projects"
        className="flex flex-col items-center space-y-2 text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-400 duration-300 ease-in-out"
      >
        <p>{t("prebutton")}</p>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
          {t("button")}
        </h2>
        <DownArrow />
      </Link>
    </section>
  );
};

export default About;
