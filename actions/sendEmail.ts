"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

// import ContactFormEmail from "@/email/contact-form-email";

// export const sendEmail = async (formData: FormData) => {
  //   const senderEmail  = formData.get("senderEmail");
  //   const senderMessage = formData.get("senderMessage");

  //   console.log("senderEmail: ", senderEmail);
  //   console.log("senderMessage: ", senderMessage);

  //   resend.emails.send({
    //     from: 'onboarding@resend.dev',
    //     to: 'olivecrona.axel@gmail.com',
    //     subject: 'Hello World checking if true',
    //     html: '<p>Congrats on sending your <strong>100th email</strong>!</p>'
    //   });
    // };

    const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const emailContent = `
  <h1>New message from your portfolio site</h1>
  <p>You received the following message from the contact form:</p>
  <p>${message}</p>
  <hr />
  <p>The sender's email is: ${senderEmail}</p>
`;

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "axel.olivecrona@pm.me",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      html: emailContent,
      // reply_to: senderEmail,
      // react: React.createElement(ContactFormEmail, {
      //   message: message,
      //   senderEmail: senderEmail,
      // }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
