// src/auth.ts
import { betterAuth } from "better-auth";                 // Better-Auth main
import { drizzleAdapter } from "better-auth/adapters/drizzle"; // Drizzle adapter
import { db } from "./db";                                // import your Drizzle instance

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "sqlite",                                   // local SQLite provider
        // schema: { /* optionally map tables if you renamed them */ }
    }),
    emailAndPassword: {
        enabled: true,                                        // enable email/password login
    },
    // … you can add socialProviders, plugins, etc.
});
