"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <section
      id="Home"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-5"
    >
      <video
        loop
        autoPlay
        muted
        poster="/customflower.webm"
        src="/customflower.webm"
        className="animate-fade animate-delay-[2000ms] rounded-full"
      />
      <h1 className="text-4xl md:text-6xl lg:text-8xl animate-fade-down animate-duration-[2000ms]">
        {t("title")}
      </h1>
      <Link
        href="#About"
        className="px-6 py-3 text-xl md:text-2xl lg:text-4xl rounded-2xl border-2 border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black duration-300 ease-in-out animate-fade-down animate-duration-[2000ms] animate-delay-[2000ms]"
      >
        {t("button")}
      </Link>
    </section>
  );
};

export default Home;
