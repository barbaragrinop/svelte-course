<script>
    import Button from "$lib/components/Button.svelte";
    import { Search, Clipboard } from 'lucide-svelte';
    // import Counter from "$lib/components/Counter.svelte";
    // import DisplayName from "$lib/components/DisplayName.svelte";
    // import RandomNumber from "$lib/components/RandomNumber.svelte";

</script>
<!-- <RandomNumber /> -->
<!-- <DisplayName />
<h1>teste</h1> -->
<!-- <Counter /> -->

{#snippet buttonLeft()}
    <Search />
{/snippet}

{#snippet buttonRight()}
    <Clipboard />
{/snippet}

<Button left={buttonLeft} right={buttonRight}>text</Button>