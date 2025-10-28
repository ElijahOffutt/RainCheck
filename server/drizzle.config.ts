// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

// Export configuration for Drizzle CLI & Studio
export default defineConfig({
    schema: "./db/schema.ts",      // Path to your schema
    out: "./drizzle",               // Directory for generated migrations
    dialect: "sqlite",              // Use SQLite dialect
    dbCredentials: {
        // The local SQLite database file to connect to
        url: "file:./db/db.sqlite",
    },
});
