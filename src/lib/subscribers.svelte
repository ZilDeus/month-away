<script>
  export let subs;

  function hasExpired(expireDate)
  {
    const current = new Date();
    if(current.getFullYear()!=expireDate.getFullYear())
      return current.getFullYear()>expireDate.getFullYear();

    if(current.getMonth()!=expireDate.getMonth())
      return current.getMonth()>expireDate.getMonth();

    return current.getDate()>expireDate.getDate();
  }
  subs.sort((a, b) => {
    if (a.expireDate.getMonth() > b.expireDate.getMonth()) {
      return 1;
    }
    else if (a.expireDate.getDate() > b.expireDate.getDate())
    {
      return 1;
    }
    else
    {
      return -1;
    }
  });
</script>
<dialog
  close
  id="remove-subs-dialog"
  class="absolute mx-auto border-2 bg-slate-900 bg-opacity-90 top-40"
>
  <form method="post" class="grid-flow-row text-white text-xl gap-1 text-center space-y-3">
    {#if subs && subs.length > 0}
        {#each subs as sub }
          <button type="submit" formaction="?/remove&name={sub.name}">{sub.name}</button>
          <br/>
        {/each}
    {/if}
  </form>
</dialog>
<dialog
  close
  id="renew-subs-dialog"
  class="absolute mx-auto border-2 bg-slate-900 bg-opacity-90 top-40"
>
  <form method="post" class="grid-flow-row text-white text-xl gap-1 text-center space-y-3">
    {#if subs && subs.length > 0}
      {#each subs as sub }
        <button type="submit" formaction="?/renew&name={sub.name}">{sub.name}</button>
        <br/>
      {/each}
    {/if}
  </form>
</dialog>
<div class="bg-gray-950 text-white rounded-md text-center mx-auto p-4 my-4 space-y-4 max-w-md">
  <dev class="border-2 border-solid border-indigo-600 grid grid-flow-row grid-cols-2">
    <h2
      class="p-3 float-left border-collapse border-indigo-600 border-r-2 border-b-2"
    >
      اسم المشترك
    </h2>
    <h2 class="p-3 float-righ border-collapse border-indigo-600 border-b-2">
      نهاية الاشتراك
    </h2>
    {#if subs && subs.length > 0}
      {#each subs as sub}
        <h2
          class="p-3 float-left border-collapse border-indigo-600 border-r-2 border-b-2 {hasExpired(sub.expireDate)?"text-red-700":"text-sky-50"}"
        >
          {sub.name}
        </h2>
        <h2 class="p-3 float-righ border-collapse border-indigo-600 border-b-2 {hasExpired(sub.expireDate)?"text-red-700":"text-sky-50"}">
          {sub.expireDate.getMonth() + 1}/{sub.expireDate.getDate()}
        </h2>
      {/each}
    {/if}
  </dev>
</div>
