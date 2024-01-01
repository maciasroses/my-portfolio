import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import { NextArrow, PrevArrow } from "./icons";
import { useEffect, useState } from "react";
import projects from "@/app/constants/projects";
import ProjectPopUp from "./ProjectPopUp";
import { useTranslations } from "next-intl";

const CarouselComponent = () => {
  const t = useTranslations("Projects");
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [modal, SetModal] = useState(false);
  const [projectSelected, setProjectSelected] = useState(projects[0]);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <>
      {modal && (
        <ProjectPopUp
          lan={t("lan")}
          project={projectSelected}
          onClick={() => SetModal(false)}
        />
      )}
      <Carousel
        placeholder="Loading..."
        className="rounded-xl"
        loop
        autoplay
        autoplayDelay={7000}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-2 p-1 bg-black/50 rounded-full">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            placeholder="Prev arrow"
            aria-label="Previous"
            variant="text"
            color="white"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 z-30 bg-black/50 hover:border-2 hover:border-white hidden sm:block"
          >
            <PrevArrow />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            placeholder="Next arrow"
            aria-label="Next"
            variant="text"
            color="white"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 z-30 bg-black/50 hover:border-2 hover:border-white hidden sm:block"
          >
            <NextArrow />
          </IconButton>
        )}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full h-full flex justify-center items-center"
            onMouseEnter={() => setIsTextVisible(true)}
            onMouseLeave={() => setIsTextVisible(false)}
          >
            <Image
              src={project.img}
              alt="Project ilustration"
              width={1880}
              height={800}
              className={`${
                !isTextVisible &&
                "animate-pulse animate-ease-in animate-duration-[5000ms]"
              }`}
              priority
            />
            {isTextVisible && (
              <div
                className="w-full h-full py-5 px-20 sm:p-10 absolute flex flex-col justify-center sm:justify-end items-center bg-black/50 animate-fade"
                onClick={() => setIsTextVisible(false)}
              >
                <p className="z-20 text-xl md:text-2xl lg:text-4xl xl:text-6xl text-white">
                  {project.title}
                </p>
                <p className="z-20 text-base md:text-lg lg:text-2xl xl:text-4xl text-gray-300 hidden sm:block">
                  {t("lan") === "en"
                    ? project.description
                    : project.description_es}
                </p>
                <button
                  onClick={() => {
                    SetModal(true);
                    setProjectSelected(project);
                  }}
                  className="z-20 rounded-xl px-4 py-1 text-sm md:text-md lg:text-xl xl:text-2xl text-white border border-black bg-black hover:border-white duration-300 ease-in-out"
                >
                  {t("lan") === "en" ? "More" : "Más"}
                </button>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
