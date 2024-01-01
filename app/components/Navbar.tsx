"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ThemeButton from "./Themebutton";
import { useRouter } from "next/navigation";
import { NAVLINKS } from "@/app/constants/links";
import Logo from "./Logo";
import NavButton from "./NavButton";
import { DropDownMenu, MxFlag, UsFlag, X } from "./icons";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const menuHandler = (link: string) => {
    router.push(link);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`z-40 w-full fixed backdrop-blur bg-white/80 dark:text-white dark:bg-[#202124FF]/80 animate-fade animate-duration-[2000ms] animate-delay-[4000ms] duration-300 ease-in-out ${
        scrollingUp
          ? "translate-y-0 drop-shadow-lg md:drop-shadow-2xl"
          : "-translate-y-full"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center md:px-16 px-6 py-2 md:py-0 text-base xl:text-xl">
        <Logo />
        <div className="flex space-x-4 md:space-x-0">
          <div className="hidden md:block">
            <ul className="flex justify-center items-center h-full">
              {NAVLINKS.map((link) => (
                <li key={link.key} className="hover:scale-105 duration-300">
                  <Link
                    className="p-4 border border-transparent hover:border-b-black dark:hover:border-b-white hover:animate-pulse duration-300"
                    href={link.href}
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
              <li className="hover:scale-105 duration-300 ">
                <Link
                  className="p-4 border border-transparent hover:border-b-black dark:hover:border-b-white hover:animate-pulse duration-300 flex gap-2 items-center"
                  href={t("locale")}
                >
                  {t("language")}
                  {t("locale") === "en" ? <UsFlag /> : <MxFlag />}
                </Link>
              </li>
            </ul>
          </div>
          <button
            aria-label="Mobile menu"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? <DropDownMenu /> : <X />}
          </button>
          <ThemeButton />
        </div>
      </nav>
      {menuOpen && (
        <ul className="flex justify-center items-center flex-col px-6 md:hidden">
          {NAVLINKS.map((link, index) => (
            <li key={link.key}>
              <NavButton
                isTop={index === 0 ? true : false}
                onClick={() => menuHandler(link.href)}
                title={t(link.name)}
              />
            </li>
          ))}
          <li className="p-4">
            <Link href={t("locale")} className="flex gap-2 items-center">
              {t("language")}
              {t("locale") === "en" ? <UsFlag /> : <MxFlag />}
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
