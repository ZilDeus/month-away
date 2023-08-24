import { redirect } from "@sveltejs/kit"; 
import { sql,eq } from "drizzle-orm";
import { db } from "$lib/server/db.js";
import { subscribers } from "$lib/server/schema.js";

export function load({ cookies }) {
	const isMohammed = cookies.get('isMohammed');
  if(!isMohammed)
  {
     throw redirect(301, "auth");
  }
}

export const actions = {
  default: async ({request}) => {
    const data = await request.formData();
    const name = data.get("name");

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let nextMonth = new Date(year,month+1,day);
    let subs = await db.select().from(subscribers).where(eq(subscribers.name,name));
    console.log(subs.length);
      if(subs.length > 0)
    {
      console.log("its there");
    await db.update(subscribers).set({expireDate:nextMonth, deleted:false}).where(eq(subscribers.name,name));
    }
      else
    {
      console.log("its not");
    await db.insert(subscribers).values({name:name,expireDate:nextMonth, deleted:false});
    }

  }
};

