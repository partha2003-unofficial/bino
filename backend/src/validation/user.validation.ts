import { z } from 'zod';

export const loginValidation = z.object({
    email: z.email(),
    password: z.string()
})

export const userValidation = loginValidation.extend({
    fullName: z.object({
        firstName: z.string()
            .min(3, 'enter minimum 3 characters'),
        lastName: z.string()
            .optional()
    }),
    userName: z.string()
})
