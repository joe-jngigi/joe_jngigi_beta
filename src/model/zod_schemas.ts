import * as zod from "zod"

export const emailMeSchema = zod.object({
    email: zod.string().email({
        message: "Email is required"
    }),
    mail: zod.string().min(5, {
        message: "A minimum of 5 characters is required"
    })
})