import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IProjectProps } from "@/app/types";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const ProjectPopUp = ({
  lan,
  project,
  onClick,
}: {
  lan: string;
  project: IProjectProps;
  onClick: any;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    title,
    popUpImg,
    summary,
    summary_es,
    context,
    context_es,
    planning,
    planning_es,
    technologies,
    technologies_es,
    features,
    features_es,
    results,
    results_es,
    link,
  } = project;

  useEffect(() => {
    const modalElement = modalRef.current;

    const handleClickOutside = (event: any) => {
      if (modalElement && !modalElement.contains(event.target)) {
        onClick();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalRef, onClick]);

  const sections = [
    {
      id: 1,
      titleEn: "Summary",
      titleEs: "Resumen",
      contentEn: summary,
      contentEs: summary_es,
    },
    {
      id: 2,
      titleEn: "Context",
      titleEs: "Contexto",
      contentEn: context,
      contentEs: context_es,
    },
    {
      id: 3,
      titleEn: "Planning",
      titleEs: "Planificación",
      contentEn: planning,
      contentEs: planning_es,
    },
    {
      id: 4,
      titleEn: "Technologies",
      titleEs: "Tecnologías",
      contentEn: technologies,
      contentEs: technologies_es,
    },
    {
      id: 5,
      titleEn: "Results",
      titleEs: "Resultados",
      contentEn: results,
      contentEs: results_es,
    },
    {
      id: 6,
      titleEn: "Features",
      titleEs: "Características",
      contentEn: features,
      contentEs: features_es,
      isList: true,
    },
  ];

  const [open, setOpen] = useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="fixed h-screen w-full z-50 bg-black/50 top-0 p-10 flex justify-center items-center animate-fade">
      <div
        ref={modalRef}
        className="bg-white dark:bg-[#202124FF] h-full rounded-lg p-4 w-full md:w-3/4 max-w-[1080px] animate-fade-up"
      >
        <div className="overflow-y-auto overflow-x-hidden min-h-auto max-h-full">
          <div className="flex justify-end sticky top-0 z-20">
            <button
              onClick={onClick}
              className="duration-300 rounded-full hover:text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 md:w-8 md:h-8 xl:w-10 xl:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-xl md:text-3xl xl:text-5xl sticky top-0 bg-white dark:bg-[#202124FF] pb-2 drop-shadow-md animate-fade animate-delay-500 z-10">
            {title}
          </h1>
          <Image
            src={popUpImg}
            alt="Project ilustration"
            width={1880}
            height={800}
            priority
            className="animate-fade animate-delay-1000"
          />
          <div className="flex w-full flex-col md:flex-row gap-2 my-2 animate-fade animate-delay-[1500ms]">
            {new Array(3).fill("").map((_, i) => (
              <div key={i} className="w-full md:w-1/3 h-auto">
                <Image
                  src={(project as any)[`imgSupport${i + 1}`]}
                  alt="Project ilustration"
                  width={1880}
                  height={800}
                  priority
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <Accordion
                placeholder="Body"
                key={section.id}
                animate={{
                  mount: { scale: 1 },
                  unmount: { scale: 0.9 },
                }}
                open={open === section.id}
                icon={<Icon id={section.id} open={open} />}
                className={`animate-fade animate-delay-[${
                  2000 + section.id * 200
                }ms]`}
              >
                <AccordionHeader
                  placeholder="Header"
                  className={`border-b-0 transition-colors ${
                    open === section.id
                      ? "text-blue-500 hover:!text-blue-700"
                      : "dark:text-white"
                  }`}
                  onClick={() => handleOpen(section.id)}
                >
                  {lan === "en" ? section.titleEn : section.titleEs}
                </AccordionHeader>
                <AccordionBody className="dark:text-white">
                  {section.isList ? (
                    <ul>
                      {lan === "en"
                        ? section.contentEn.map((item: any, index: any) => (
                            <li key={index}>{item}</li>
                          ))
                        : section.contentEs.map((item: any, index: any) => (
                            <li key={index}>{item}</li>
                          ))}
                    </ul>
                  ) : lan === "en" ? (
                    section.contentEn
                  ) : (
                    section.contentEs
                  )}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
          <Link
            href={link}
            target="_blank"
            className="animate-fade animate-delay-[4000ms]"
          >
            {lan === "en" ? "Here is the website" : "Velo por ti mismo"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopUp;
