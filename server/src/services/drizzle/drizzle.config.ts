import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

let isDev = process.env.ISDEV

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './drizzle',
    dialect: isDev ? 'sqlite' : 'd1',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});