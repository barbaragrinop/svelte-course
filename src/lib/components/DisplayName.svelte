<script lang="ts"> 
    let source = 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'
    let bio = 'Desenvolvedora Front-end'
    let firstName = $state('Barbara')
    let lastName = $state('Hellen')
    let userName = $state('Barbara Hellen Pereira')
    //qual a diferença
    let fullName = $derived(`${firstName} ${lastName}`)
    let fullNameBy = $derived.by(() => {
        return `${firstName} ${lastName}`
    })

    $effect(() => {
        if(userName || fullName){
            console.log('User has a username or fullname')
        }
    })
</script>

<input type="text" value={userName} oninput={(e) => { userName =  e.currentTarget.value }}>
<!-- jeito do svelte -->
<input bind:value={firstName} />
<input bind:value={lastName} />
<input bind:value={userName} />

<img src={source} alt=" Avatar of {fullName}" width="200" height="200"/>
<h1>{userName || fullName}</h1>
<p>{bio}</p>


<style>
    h1 {
        color: red;
    }
</style>