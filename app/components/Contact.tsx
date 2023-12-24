"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Alert } from "@material-tailwind/react";
import type { ICredentialsProps, color } from "../types";
import { sendEmail } from "../utils/sendEmail";

const Contact = ({ credentials }: ICredentialsProps) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<color>("green");
  const [message, setMessage] = useState("");
  const [secondMessage, setSecondMessage] = useState("");
  const [isFailed, setIsFailed] = useState(false);

  const t = useTranslations("Contact");
  const form = useRef<HTMLFormElement>(null);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
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
        {/* {t('title')} */}
        <form
          className="w-full md:w-[80%]"
          ref={form}
          onSubmit={handleSendEmail}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4 w-full">
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
            className="py-2 border-b-2 mb-4 border-black dark:border-white bg-transparent focus:outline-none w-full min-h-[50px]"
            name="message"
            required
            placeholder={t("message")}
          />
          <button
            type="submit"
            className="px-4 py-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white  duration-300 ease-in-out"
          >
            {t("button")}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
