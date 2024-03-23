import React from "react";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/_components/email_template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMeDm = async (name: string, email: string, mail: string) => {
  await resend.emails.send({
    from: "Portfolio | Acme <onboarding@resend.dev>",
    to: "josephngigi775@gmail.com",
    subject: "Reach me out on my DM",
    react: EmailTemplate({ name, email, mail }) as React.ReactElement,
  });
};
