<script lang="ts">
    let count = $state(2);
    let frequency = $state(1000);
    let paused = $state(false);

    $effect(() => {
        let interval: ReturnType<typeof setInterval>;
        if(!paused){
            interval = setInterval(() => {
                console.log("Effect ran", count);
                count += 1;
            }, frequency);
        }
        return () => clearInterval(interval);
    })
</script>

<h1>{count}</h1>
<p>{frequency}</p>
<button onclick={() => frequency *= 2}>Slower</button>
<button onclick={() => frequency /= 2}>Faster</button>
<button onclick={() => paused = !paused}>{paused ? 'Play' : 'Pause'}</button>
<button onclick={() => { count = 0; frequency = 1000}}>Reset</button>


<!-- Section Summary - Module 1
Let's summarize what we have learned so far in this section:

You should now be familiar with the signals based reactivity model that is used in Svelte.

We have learned about pure functions and the Microtasks queue.

You should be familiar with the basic structure of a component.

We have used the @html tag to render HTML in our components.

We have discussed in details the $state, $derived,  $derived.by, $effect and $effect.pre runes.

We have seen how to bind inputs to a state using the bind: directive. We have used bind:value for a text input but for other kinds of inputs like a checkbox for example we will have to use bind:checked.

We have also used the bind: directive to get a reference to a DOM node using bind:this.

We have discussed the untrack function that you can use in an effect to avoid making that state a dependency to that effect.

We have discussed lifecycle functions like onMount and onDestroy.

We have seen the tick() function that returns a promise that resolves when any pending DOM updates are applied.

We have also seen how to attach event handlers to DOM elements. We use lowercase for event attributes (ex. onclick). -->