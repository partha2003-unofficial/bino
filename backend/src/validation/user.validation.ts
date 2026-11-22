import { z } from 'zod';

export const loginValidation = z.object({
    email: z.string(),
    password: z.string()
})

export const userValidation = loginValidation.extend({
    userName: z.string()
})
