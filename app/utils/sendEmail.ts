import { RefObject } from "react";
import emailjs from "@emailjs/browser";
import { typeCredential } from "../types";

export const sendEmail = async (
  form: RefObject<HTMLFormElement>,
  credentials: typeCredential
) => {
  try {
    await emailjs
      .sendForm(
        credentials.serviceId!,
        credentials.templateId!,
        form.current!,
        credentials.publicKey!
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          throw error.text;
        }
      );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
