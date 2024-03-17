"use server";

import * as zod from "zod";
import connectDB from "@/lib/mongodb";
import { emailMeSchema } from "@/model_schemas/zod_schemas";

import {
  deleteAllUsers,
  deleteSelectedUsers,
  deleteUserById,
  getUserDocument,
  getCollections,
  getUserById,
  getUserByEmail,
  updateUserById,
  updateUserByEmail,
} from "@/db_queries/users_queries";

export const sendEmailToDBAction = async (
  values: zod.infer<typeof emailMeSchema>
) => {
  console.log(values);

  const database = await connectDB();

  // const listUserDoc = await getCollections();
  // console.log(listUserDoc);

  const userdata = {
    username: "Jowie Ngigi",
  };
  const listUserDoc = await updateUserByEmail(
    "www.jowiejoe@gmail.com",
    userdata
  );
  
  // const listUserDoc = await getUserDocument();
  console.log(listUserDoc);

  // database.createCollection("myCollection");

  // database.createCollection("Email")
  // await Email.createCollection();
  // Get all users

  return { success: "Email Sent Successfully" };
};
