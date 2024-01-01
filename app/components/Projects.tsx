"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { RightArrow } from "./icons";
import CarouselComponent from "./CarouselComponent";
import Collaborations from "./Collaborations";

const Projects = () => {
  const t = useTranslations("Projects");

  return (
    <section
      id="Projects"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-10"
    >
      <CarouselComponent />
      <Collaborations />
      <div className="flex flex-col gap-2">
        <h3 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          {t("title")}
        </h3>
        <Link
          href="#Contact"
          className="text-2xl md:text-4xl lg:text-6xl px-4 py-2 flex justify-center items-center gap-4 text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-400 duration-300 ease-in-out"
        >
          {t("button")}
          <RightArrow />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
