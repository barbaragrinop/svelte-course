<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import { Search, Clipboard, AlarmClockMinusIcon } from 'lucide-svelte';
    // import Counter from "$lib/components/Counter.svelte";
    // import DisplayName from "$lib/components/DisplayName.svelte";
    // import RandomNumber from "$lib/components/RandomNumber.svelte";

</script>
<!-- <RandomNumber /> -->
<!-- <DisplayName />
<h1>teste</h1> -->
<!-- <Counter /> -->


<Button>
    {#snippet left(isHovered: boolean)}
        {#if isHovered}
            <Search />
        {:else}
            <AlarmClockMinusIcon />
        {/if}
    {/snippet}

    {#snippet children()}
        Hover Me
    {/snippet}

    {#snippet right()}
        <Clipboard />
    {/snippet}
</Button>