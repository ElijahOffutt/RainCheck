// src/db.ts
import Database from "better-sqlite3";                    // SQLite driver
import { drizzle } from "drizzle-orm/better-sqlite3";     // Drizzle ORM for SQLite
import * as schema from "../../db/schema";                        // import the generated schema

const sqlite = new Database("./db/db.sqlite");               // connect to local SQLite file

export const db = drizzle(sqlite, { schema });            // create & export Drizzle instance with schema
