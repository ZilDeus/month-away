import { redirect } from "@sveltejs/kit"; 

export const actions = {
  default: async ({request , cookies}) => {
    const data = await request.formData();
    const code = parseInt(data.get("code"));
    if(code == 1242)
    {
      cookies.set('isMohammed', true);
      throw redirect(302,"./");
    }
    else
    {
      cookies.set('isMohammed', false);
      throw redirect(302,"./error");
    }
  }
};
