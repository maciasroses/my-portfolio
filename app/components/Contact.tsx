"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Alert } from "@material-tailwind/react";
import type { color, typeCredential } from "../types";
import { sendEmail } from "../utils/sendEmail";
import { Pending } from "./icons";

const Contact = (credentials: typeCredential) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<color>("green");
  const [message, setMessage] = useState("");
  const [secondMessage, setSecondMessage] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  const [pending, setPending] = useState(false);

  const t = useTranslations("Contact");
  const form = useRef<HTMLFormElement>(null);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    setPending(true);
    e.preventDefault();

    const response = await sendEmail(form, credentials);

    setMessage(response ? t("successEmail") : t("errorEmail"));
    setSecondMessage(
      response ? t("secondSuccessEmail") : t("secondErrorEmail")
    );
    setColor(response ? "green" : "red");
    setIsFailed(response ? false : true);
    setOpen(true);

    (e.target as HTMLFormElement).reset();
    setPending(false);
  };

  return (
    <>
      <div
        id="Contact"
        className="w-full min-h-screen flex flex-col justify-center items-center text-center p-14 gap-5"
      >
        <Alert
          className="fixed bottom-5 w-[80%] md:w-auto"
          open={open}
          color={color}
          onClose={() => setOpen(false)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          <p className="font-extrabold">{message}</p>
          <small>
            {secondMessage}{" "}
            {isFailed && (
              <a className="underline" href="emailto:macias_george@outlook.com">
                {t("emailForProblems")}
              </a>
            )}
          </small>
        </Alert>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-4xl md:text-6xl lg:text-8xl font-bold text-left w-full">
            {t("title")}
          </p>
          <form
            className="w-full md:w-[80%]"
            ref={form}
            onSubmit={handleSendEmail}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-4 w-full text-xl lg:text-2xl xl:text-4xl">
              <input
                className="py-2 border-b-2 border-black dark:border-white bg-transparent focus:outline-none w-full md:w-1/2"
                type="text"
                name="name"
                required
                placeholder={t("name")}
              />
              <input
                className="py-2 border-b-2 border-black dark:border-white bg-transparent focus:outline-none w-full md:w-1/2"
                type="email"
                name="email"
                required
                placeholder={t("email")}
              />
            </div>
            <textarea
              className="py-2 border-b-2 mb-4 border-black dark:border-white bg-transparent focus:outline-none w-full min-h-[50px] text-xl lg:text-2xl xl:text-4xl"
              name="message"
              required
              placeholder={t("message")}
            />
            <button
              type="submit"
              disabled={pending}
              className={`px-4 py-2 text-base lg:text-xl xl:text-2xl rounded-2xl duration-300 ease-in-out ${
                !pending &&
                "border-2 border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              }`}
            >
              {pending ? <Pending /> : `${t("button")}`}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
