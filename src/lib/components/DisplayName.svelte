<script lang="ts"> 
    let source = 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'
    let bio = 'Desenvolvedora Front-end'
    let firstName = $state('Barbarsa')
    let lastName = $state('Hellen')
    let userName = $state('')
    //qual a diferença
    // let fullName = $derived(`${firstName} ${lastName}`)
    let fullName = $derived.by(() => {
        console.log(' fullName = $derived.', {firstName, lastName})
        return `${firstName} ${lastName}`
    })

    $effect(() => {
        if(userName || fullName){
            console.log('User has a username or fullname')
        }
    })
</script>

<!-- <input type="text" value={userName} oninput={(e) => { userName =  e.currentTarget.value }}> -->
<!-- jeito do svelte -->
<span>first</span>
<input bind:value={firstName}  /> 

<span>last</span>
<input bind:value={lastName} />

<span>username</span>
<input bind:value={userName} />
 
<img src={source} alt=" Avatar of {fullName}" width="200" height="200"/>
<h1>{userName || fullName}</h1>
<p>{@html bio}</p>

<button onclick={() => {
    console.log('clicou', fullName);
}}>clica</button>


<style>
    h1 {
        color: red;
    }
</style>