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
} from "@/db_queries/users_queries";

export const sendEmailToDBAction = async (
  values: zod.infer<typeof emailMeSchema>
) => {
  console.log(values);

  const database = await connectDB();

  // const listUserDoc = await getCollections();
  // console.log(listUserDoc);

  const users = [
    "65f6f9c435d8aa67400d7b58",
    "65f6f9b935d8aa67400d7b56",
    "65f6f9ae35d8aa67400d7b54",
    "65f6f9ae35d8aa67400d7b54",
    "65f6f9a135d8aa67400d7b52",
  ];

  const listUserDoc = await getUserDocument();
  console.log(listUserDoc);

  // await deleteSelectedUsers(users);
  // database.createCollection("myCollection");

  // database.createCollection("Email")
  // await Email.createCollection();
  // Get all users

  return { success: "Email Sent Successfully" };
};
