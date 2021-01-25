<script lang="ts">
  export let foobar = "barbaz";

  export function getLabel(label: string): string {
    return `${foobar} + ${label}`;
  }

  $: document.title = foobar;
</script>

<div>
  <h3>{foobar}</h3>
</div>

<style></style>
