<script>
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
		dadjoke = null
		fetch(`https://icanhazdadjoke.com/search`)
			.this( res => res.json() )
				.then( json => {
					dadjoke.json.data[0].joke
				})
	}
</script>

<main>
	<header>
		<h1>DadJokes</h1>
		<input placeholder='Get silly' type="text" bind:value={q}>
		<button on:click={getDadJoke}>Get dad joke</button>
	</header>

		{#if dadjoke}
			<h3>{dadjoke.joke}</h3>
		{:else}
		<h2>Search for some damn good dad jokes</h2>
	{/if}
</main>

<style>
	:global(body, html) {
		margin: 0;
		padding: 0;
	}
	:global(*) {
		box-sizing: border-box;
	}
	main {
		display: grid;
		place-items: center;
		height: 100%;
		position: relative;
		text-align: center;
		/* padding: 1em;
		max-width: 240px;
		margin: 0 auto;*/
	}
	h1 {
		color: #4791f3;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 700;
	}
	h2 {
		padding-top: 8rem;
	}
	input {
		border: none;
		border-bottom: 1px solid black;
		outline: none;
		text-align: center;
	}
	header {
		position: absolute;
		top: 2rem;
		width: 50%;
		display: grid;
	}
</style>