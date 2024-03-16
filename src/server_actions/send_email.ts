"use server";

import * as zod from "zod";
import connectDB from "@/lib/mongodb";
import { emailMeSchema } from "@/model_schemas/zod_schemas";
import Email from "@/model_schemas/email_me_schema";

export const sendEmailToDBAction = async (
  values: zod.infer<typeof emailMeSchema>
) => {
  console.log(values);

  // const database = await connectDB();
  // database.createCollection("Email")
  await Email.createCollection()
  // Get all users

  return { success: "Email Sent Successfully" };
};
