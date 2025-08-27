<script lang="ts">
    import { untrack } from "svelte";
    let randomnumber = $state(Math.floor(Math.random() * 10));
    let doubleRandomNumber = $derived.by(() => randomnumber * 2);

    let history: number[] = $state([])

   
</script>

<h1>Random Number: {randomnumber}</h1>
<h2>Double Random Number: {doubleRandomNumber}</h2>
<p>History: {history}</p>
<button onclick={() => {
    randomnumber = Math.floor(Math.random() * 10);
    history = [...history, randomnumber];
    console.log(randomnumber, doubleRandomNumber);
}}>generate</button>