<script>
	import jokes from 'https://icanhazdadjoke.com/'
	import { fade, fly, scale } from 'svelte/transition'

	const limit = 1
	let joke
	let favorites = []
	let showFavs = false

	const getDadjoke = () => {
		joke = null
		fetch(`https://icanhazdadjoke.com/`)
		.this( res => res.json() )
			.this( json => {
				
			})
	}
	const addToFavs = () => {
		/*if(){

		}else{

		}
		if()*/
	}
</script>

<main>
	<header>
		<h1>Dad Jokes</h1>
		<!--<input placeholder='Get silly' type="text" on:keydown = {(key) => key.key == "Enter" ? getImage(): ""
		on:click = { e => e.target.value = ''}
    	on:focus = { e => e.target.value = '' } 
		on:click = { () => showFav = false }>-->
		{#if favorites.length > 0}
      		<button in:scale on:click={ () => showFavs = !showFavs }>
        		{ showFavs ? 'Skjul favoritter' : 'Vis favoritter' }
      		</button>
  		{/if}
	</header>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	/*input{
		border: none;
		border-bottom: 1px solid black;
		text-align: center;
	}*/
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>