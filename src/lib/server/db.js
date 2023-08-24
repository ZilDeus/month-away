import { drizzle } from 'drizzle-orm/postgres-js';
import { DATABASE_URL } from "$env/static/private"
import postgres from 'postgres';

const client = postgres(DATABASE_URL);
export const db = await drizzle(client);
