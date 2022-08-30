<script lang="ts">
  import Card from "../ui-library/card/card.svelte";
  let clazz = "";
  export { clazz as class };
</script>

<Card
  size="small"
  class="sticky left-full lgx:top-40 max-w-[642px] z-10 shadow-default {clazz}"
>
  <slot />
</Card>
