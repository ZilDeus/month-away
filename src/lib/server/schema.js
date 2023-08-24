import { pgTable, varchar, date, boolean } from "drizzle-orm/pg-core";
 
export const subscribers = pgTable('subscribers', {
  name: varchar('name' , { length: 56}),
  expireDate: date('expireDate', { mode: "date" }),
  deleted: boolean('deleted'),
});
