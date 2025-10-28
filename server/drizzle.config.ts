import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/services/drizzle/schema.ts',
    out: './drizzle',
    dialect: 'sqlite',
    dbCredentials: {
        url: "file:./src/db/db.sqlite"
    },
});