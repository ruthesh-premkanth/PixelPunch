import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../config/emailConfig";

export const sendEmail = async (form: HTMLFormElement) => {
  try {
    const result = await emailjs.sendForm(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      form,
      EMAIL_CONFIG.publicKey,
    );

    return result;
  } catch (error) {
    throw error;
  }
};
