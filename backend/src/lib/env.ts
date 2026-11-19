import z from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().default(4000),
    MONGODB_URL: z.string().min(1),
    JWT_SECRET: z.string(),
    NODE_ENV: z.string().default("development"),
    RESEND_API_KEY: z.string(),
    EMAIL_FROM: z.string()
})

export const env = envSchema.parse(process.env)