---
layout: false
---

<script context="module">
  export const prerender = true;
  export const load = async ({ url }) => {
    return {
      status: 301,
      redirect: [url.pathname, "intro"].join("/"),
    };
  };
</script>
