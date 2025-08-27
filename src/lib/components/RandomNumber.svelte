<script lang="ts">
    import { onDestroy, onMount, tick, untrack } from "svelte";
    let randomnumber = $state(Math.floor(Math.random() * 10));
    let doubleRandomNumber = $derived.by(() => randomnumber * 2);

    let history: number[] = $state([])

    let historyPTag: HTMLParagraphElement

    //quando o componente é montado
    onMount(() => {
        console.log('onMount ')

        return () => {
            console.log('has onMount cleanup')
        }
    })

    //quando o componente é destruído
    // onDestroy(() => {
    //     console.log('onDestroy ')
    // })

    // pre function runs before DOM updates
    $effect.pre(() => { 
        history.length
        console.log('historyPTag preeffect', historyPTag?.innerText)
        //tick returns a promise that resolves after the DOM has been updated
        tick().then(() => {
            console.log('afeter tick preeffect', historyPTag?.innerText)

        })

           return () => {
            console.log('pre cleanup effect')
        }
    })

    // effect runs after DOM updates
    $effect(() => {
        history.length
        console.log('historyPTag', historyPTag.innerText)

        return () => {
            console.log('cleanup effect')
        }
    })
   
</script>

<h1>Random Number: {randomnumber}</h1>
<h2>Double Random Number: {doubleRandomNumber}</h2>
<p bind:this={historyPTag}>History: {history}</p>
<button onclick={() => {
    randomnumber = Math.floor(Math.random() * 10);
    history = [...history, randomnumber];
    console.log(randomnumber, doubleRandomNumber);
}}>generate</button>