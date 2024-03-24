"use server";

import * as zod from "zod";
import connectDB from "@/lib/mongodb";
import { emailMeSchema } from "@/data_manipulation/model_schemas/zod_schemas";

import Email from "@/data_manipulation/model_schemas/email_me_schema";
import { sendMeDm } from "@/lib/mail";

export const sendEmailToDBAction = async (
  values: zod.infer<typeof emailMeSchema>
) => {
  const validated_data = emailMeSchema.safeParse(values);

  if (!validated_data.success) {
    return { error: "Invalid values. Input all fields correctly!" };
  }

  const { email, mail, name } = validated_data.data;
  await connectDB();

  const newEmail = new Email({
    email,
    name,
    message: mail,
  });

  try {
    newEmail.save();
    sendMeDm(name, email, mail);
    return { success: "DM sent Successfully 😎! I will reach out ASAP" };
  } catch (err) {
    console.log("Email save Error", err);
    return { error: "Something went wrong 💀" };
  }
};
