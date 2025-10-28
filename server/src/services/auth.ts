
import "dotenv/config"

import { betterAuth } from "better-auth"

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    database: process.env.DATABASE_URL
})