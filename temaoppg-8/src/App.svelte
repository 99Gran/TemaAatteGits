<script>
	import { scale, fly, fade } from 'svelte/transition'
	import { BookmarkIcon} from 'svelte-eva-icons'

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
		//dadjoke = null
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
</script>

<main>
	<header>
		<h1>Dad Jokes</h1>
		<button on:click={getDadJoke}>Get dad joke</button>
			{#if favorites.length > 0}
				<button in:scale on:click={ () => showFaves = !showFaves}>
					{ showFaves ? 'Hide favourites' : 'Show favourites' }
				</button>
			{/if}
	</header>

	{#if !showFaves}
		{#if dadjoke}
			<h3>{dadjoke}</h3>
				<div class='bookmark' on:click={()=>addToFaves(dadjoke)} style={favorites.includes(dadjoke) ? 'fill: #5946E8' : 'fill:white'}>
					<BookmarkIcon/>
				</div>
			{:else}
				<h2>Do like daddy cool and click</h2>
		{/if}
		{:else}
		<div class='favorites'>
			{#each favorites as fav}
					<div class="favorite">
						<h3>{dadjoke}</h3>
						<div class="bookmark" on:click={()=>addToFaves(fav)} style={favorites.includes(dadjoke) ? 'fill: #5946E8' : 'fill:white'}>
							<BookmarkIcon/>
						</div>
					</div>
				{/each}
			</div>
		<!-- {#if dadjoke}
			<h3>{dadjoke}</h3>
		{:else}
		<h2>Dad jokes, only one click away...</h2>
			<div class='bookmark'>
				<BookmarkIcon/>
			</div>	 -->
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
		place-items: center;
		height: 100%;
		position: relative;
		text-align: center;
		/* padding: 1em;
		max-width: 240px;
		margin: 0 auto;*/
	}
	h1 {
		color: #eee;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 700;
	}
	h2 {
		padding-top: 45vh;
		color: #eee;
		font-weight: 300;
	}
	h3 {
		color: #eee;
		width: 50vw;
		padding-top: 5rem;
	}
	button {
		border: none;
		outline: none;
		text-align: center;
	}
	.bookmark {	
		bottom: 6rem;
		height:4rem;
		width:4rem;
		fill: #eee;
		position: absolute;
	}
	.favorite {
		position: relative;
	}
	.favorites {
		max-height: 60vh;
		max-width: 80vw;
    	/* overflow: scroll; */
		display: grid;
    	gap: 6rem;
    	grid-template-columns: repeat(4, 100px);
	}
	.favorites .bookmark {
		position: absolute;
		align-items: right;
		max-width: 2rem;
	}
	header {
		position: absolute;
		top: 2rem;
		width: 50%;
		display: grid;
	}
</style>