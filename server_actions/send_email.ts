"use server"

import * as zod from "zod"
import connectDB from "@/lib/mongodb"
import { emailMeSchema } from "@/model/zod_schemas"

export const sendEmailToDBAction = async (values: zod.infer<typeof emailMeSchema>) => {
    console.log(values);
    
    const database = await connectDB

    console.log(database);
    
}