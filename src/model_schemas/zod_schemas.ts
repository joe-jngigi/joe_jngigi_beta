import * as zod from "zod"

export const emailMeSchema = zod.object({
    email: zod.string().email({
        message: "Email is required!"
    }),
    name: zod.string().min(2, {
        message: "minimum of 2 characters is required!"
    }),
    mail: zod.string().min(5, {
        message: "A minimum of 5 characters is required!"
    })
})