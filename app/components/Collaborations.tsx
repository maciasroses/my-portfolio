import React from "react";
import collaborations from "../constants/collaborations";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Collaborations = () => {
  const t = useTranslations("Collaborations");
  return (
    <article>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold">
        {t("title")}
      </h1>
      <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 mt-5">
        {collaborations.map((collaboration) => (
          <Link
            key={collaboration.id}
            href={collaboration.link}
            target="_blank"
            className="h-fit"
          >
            <article className="overflow-hidden rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-800 transform transition duration-500 hover:scale-110 h-auto">
              <div className="w-full h-56 relative">
                <Image
                  fill
                  sizes="100%"
                  src={collaboration.img}
                  alt={`${collaboration.title} project`}
                  className="size-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl mb-1 font-medium">
                  {collaboration.title}
                </h2>
                <p className="h-[95px] overflow-y-auto">
                  {t("lan") === "en"
                    ? collaboration.overview
                    : collaboration.overwiew_es}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default Collaborations;
