import { pgTable, text, date, boolean } from "drizzle-orm/pg-core";
 
export const subscribers = pgTable('subscribers', {
  name: text('name'),
  expireDate: date('expireDate', { mode: "date" }),
  deleted: boolean('deleted'),
});
