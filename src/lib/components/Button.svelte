<script lang="ts">
    import type { Snippet } from 'svelte';
    interface Props {
        left?: Snippet<[boolean]>;
        right?: Snippet;
        children: Snippet;
        size?: 'small' | 'medium' | 'large';
        shadown?: boolean;
    }
    
    let { left, right, children, size = 'small', shadown = false}: Props = $props();

    let isLeftHover = $state<boolean>(false)
</script>
 

<button 
    class:small={size === 'small'} 
    class:large={size === 'large'}  
    class:medium={size === 'medium'}
    class:shadown={shadown}
>
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

        &:hover {
            background-color: #0056b3;
        }

        .left-content{
            margin-inline-start: 10px;
        }

        .right-content{
            margin-inline-end: 10px;
        }

        &.small {
            font-size: 12px;
            padding: 6px 12px;
        }

        &.medium {
            font-size: 16px;
            padding: 10px 20px;
        }

        &.large {
            font-size: 20px;
            padding: 14px 28px;
        }

        &.shadown {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.342);
        }


    }

  
</style>