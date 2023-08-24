<script>
  import Input from "../lib/Input.svelte";
  import Button from "../lib/Button.svelte";
</script>

<form class="space-y-8" method="post">
<div class="m-auto px-7 max-w-lg w-full"><Input label="اضف مشترك" name="name" type="text" /></div>
<div class="w-full flex justify-center"><Button  type="submit" disabled={false}>اضف</Button></div>
</form>
