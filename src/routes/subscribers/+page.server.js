import { redirect } from "@sveltejs/kit"; 
import { sql,eq } from "drizzle-orm";
import { db} from "$lib/server/db.js";
import { subscribers } from "$lib/server/schema.js";

export function load({ cookies }) {
	const isMohammed = cookies.get('isMohammed');
  if(!isMohammed)
  {
     throw redirect(301, "auth");
  }
  return {
    subscribers : db.select().from(subscribers).where(eq(subscribers.deleted,false))
  };
}

export const actions = {
  renew: async ({url}) => {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    const subName = url.searchParams.get("name");
    await db.update(subscribers).set({expireDate:new Date(year,month+1,day)}).where(eq(subscribers.name,subName));
  },
  remove: async ({url}) => {
    const subName = url.searchParams.get("name");
    await db.update(subscribers).set({deleted:true}).where(eq(subscribers.name,subName));
  },
};

