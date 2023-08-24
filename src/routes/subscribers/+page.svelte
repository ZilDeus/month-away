<script>
  import Button from "../../lib/Button.svelte";
  import Subscribers from "../../lib/subscribers.svelte";
  export let data;
</script>

<Subscribers subs={data.subscribers} />
<div class="justify-center flex space-x-3">
  <Button onClick={() => document.getElementById("remove-subs-dialog").show()}>
    حذف مشترك</Button
  >
  <Button onClick={() => document.getElementById("renew-subs-dialog").show()}>
    تجديد مشترك</Button
  >
</div>
