import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['TST', 'PPR', 'PROD']).default('PROD'),
    DATABASE_URL: z.string(),
    PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false) {
    console.error('warn... Invalid environment variables!', _env.error.format())
    throw new Error('Invalid environment variable.')
}

export const env = _env.data