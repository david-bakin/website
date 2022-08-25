<script lang="ts">
  import { navigating } from "$app/stores";
  import { versions } from "$lib/contents/docs/versions";
  import { createPopperActions } from "svelte-popperjs";
  import topicsState from "./states/topics-state";
  export let version: string;

  $: if ($navigating) {
    displayVersions = false;
  }

  let displayVersions: boolean = false;

  const [popperRef, popperContent] = createPopperActions();

  const popperOptions = {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 5],
        },
      },
    ],
  } as any;
</script>

<style lang="postcss">
  .switcher:not(.topics-active) {
    @apply hidden lg:block;
  }
</style>

<div
  class="w-full mb-4 sm:px-4 lg:px-0 switcher {$topicsState
    ? 'topics-active'
    : ''}"
>
  <button
    on:click={() => (displayVersions = !displayVersions)}
    class="box-border flex items-center justify-between bg-card rounded-2xl text-important border-divider border px-4 py-2 appearance-none w-full"
    use:popperRef
  >
    {version}
    <img src="/arrow-grey.svg" alt="dropdown arrow" />
  </button>
  {#if displayVersions}
    <ul
      class="z-30 box-border bg-card rounded-2xl text-important border-divider border px-4 py-2 appearance-none w-full"
      use:popperContent={popperOptions}
    >
      <li>
        <a href="/docs">Saas</a>
      </li>
      {#each versions as release}
        <li>
          <a href="/docs/{release.name}">{release.name}</a>
        </li>
      {/each}
    </ul>
  {/if}
</div>
