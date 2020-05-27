<script>
	import { scale, fly, fade } from 'svelte/transition'
	import Dadjoke from './Dadjoke.svelte'

	let q = ''
	let dadjoke
	let favorites = []
	let showFaves = false

	const addToFaves = (dadjoke) => {
		if(!favorites.includes(dadjoke)){
			favorites = [dadjoke, ...favorites]
		}else{
			favorites = favorites.filter( element => element != dadjoke)
		}
		if(favorites.length == 0) showFaves = false
	}

	const getDadJoke = () => {
		showFaves = false
		dadjoke = null
		fetch('https://icanhazdadjoke.com/', {
		headers:{
			Accept: 'application/json'}
			})
			.then( res => res.json() )
				.then( json => {
					console.log(json)
					dadjoke = json.joke
				})
	}

	$: console.log(favorites)
</script>

<main>
	<header>
		<h1>Dad Jokes</h1>
		<button on:click={getDadJoke}>Get dad joke</button>
			{#if favorites.length > 0}
				<button on:click={ () => showFaves = !showFaves}>
					{ showFaves ? 'Hide favourites' : 'Show favourites' }
				</button>
			{/if}
	</header>

	{#if !showFaves}
		{#if dadjoke}
			<div class="dadjokes">
			<Dadjoke {dadjoke} {addToFaves} {favorites}/>
			</div>
		{:else}
			<h2>Do like daddy cool and click the button</h2>
		{/if}
		{:else}
		<div class='favorites'>
			{#each favorites as fav}
				<Dadjoke dadjoke={fav} {addToFaves} {favorites}/>	
			{/each}
		</div>
	{/if}
</main>


<style>
	:global(body, html) {
		margin: 0;
		padding: 0;
		background: rgb(127,0,255);
		background: linear-gradient(90deg, rgba(127,0,255,1) 0%, rgba(225,0,255,1) 100%);
	}
	:global(*) {
		box-sizing: border-box;
	}
	main {
		display: grid;
		grid-template-rows: 40vh auto;
		place-items: center;
		height: 100%;
		position: relative;
		text-align: center;
	}
	h1 {
		color: #eee;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 700;
	}
	h2 {
		color: #eee;
		font-weight: 300;
	}
	button {
		border: none;
		outline: none;
		text-align: center;
		max-width: 18vw;
		padding: .8rem;
	}
	.dadjokes {
		width: 50vw;
		display: grid;
		grid-template-rows: 1fr;
	}
	.favorites {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 90vw;
		gap: 2rem;
	}
</style>