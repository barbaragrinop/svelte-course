<script lang="ts">
    import type { Snippet } from 'svelte';
    interface Props {
        left?: Snippet<[boolean]>;
        right?: Snippet;
        children: Snippet;
    }
    
    let { left, right, children }: Props = $props();

    let isLeftHover = $state<boolean>(false)
</script>
 

<button >
    {#if left}
        <div 
            role="presentation"
            class="left-content" 
            onmouseenter={() => {
                isLeftHover = true
            }}
            onmouseleave={() => {
                isLeftHover = false
            }}
        >
            {@render left(isLeftHover)}
        </div>
    {/if}
    {@render children()}
    {#if right}
        <div class="right-content">
            {@render right()}
        </div>
    {/if}
    <!-- {@render left?.()} -->
</button> 

<style lang="scss">
    button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>