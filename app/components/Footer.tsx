"use client";

import { useTranslations } from "next-intl";
import Logo from "./Logo";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="w-full bg-gray-100 dark:bg-black dark:text-white">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Logo />
        <div className="flex flex-col md:flex-row items-end gap-1 text-base xl:text-xl">
          <p className="flex flex-col sm:flex-row items-end gap-1">
            © 2018 - {new Date().getFullYear()}
            <span className="md:block hidden">
              Jorge Humberto Macías Romero.
            </span>
            <span className="block md:hidden">J. H. Macías Romero</span>
          </p>
          <p className="text-right">{t("rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
