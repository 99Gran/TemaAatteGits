<script>
	import { scale, fly, fade } from 'svelte/transition'
	import { HeartOutlineIcon } from 'svelte-eva-icons'

	let q = ''
	const limit = 1
	import { apikeys } from '/Users/ninisophiegranrud/Documents/api/apikeys.js'
	let api_key = apikeys.giphy
	let gif
	let favorites = []
	let showFav = false
	$: console.log(favorites.includes(gif))

	const addToFav = (gif) => {
  		if(!favorites.includes(gif)){
    		favorites = [gif, ...favorites] //spread syntaks - favorites = gif + favorites
  		}else{
    		//filter returnerer en liste med de elementer som oppfylder en betingelse
			favorites = favorites.filter( element => element != gif)
		  }
		if(favorites.length == 0) showFav = false
	}

	const getImage = () => {
		gif = null
		fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&api_key=${api_key}`)
		.then( res => res.json() )
			.then( json => {
				//console.log(json)
				gif = json.data[0].images.downsized_medium.url
			})
	}
</script>

<main>
	<header>
		<input placeholder="Search for gifs" type="text" bind:value={q} on:keydown = {(key) => key.key == "Enter" ? getImage(): ""}
		on:click = { e => e.target.value = ''}
    	on:focus = { e => e.target.value = '' }
		on:click = { () => showFav = false }
		>
		<!--<button on:click={getImage}>I'm bored</button>-->
		{#if favorites.length > 0}
      		<button in:scale on:click={ () => showFav = !showFav }>
        		{ showFav ? 'Skjul favoritter' : 'Vis favoritter' }
      		</button>
  		{/if}
	</header>

	{#if !showFav}
		{#if gif}
    		<img in:fly={{x:-1500, duration: 1500}} src="{gif}" alt="{q}">
				<div class='heart' on:click={()=>addToFav(gif)} style={favorites.includes(gif) ? 'fill:red' : 'fill:white'}>
    				<HeartOutlineIcon />
    			</div>
		{:else}
   		 <h2>Type on top if you're bored</h2>
	{/if}  
	{:else}
    <div in:fly={{x:1000}} class="favorites">
        {#each favorites as fav}
		<div class="favorite">
            <img src='{fav}' alt='giffy'>
			<div class='heart' on:click={()=>addToFav(fav)} style={favorites.includes(gif) ? 'fill:red' : 'fill:white'}>
    				<HeartOutlineIcon />
    		</div>
		</div>
        {/each}
    </div>
	{/if} 
</main>

<style>
	:global(body, html) {
		margin:0;
		padding:0;
	}
	:global(*) {
		box-sizing:border-box;
	}
	main {
		display: grid;
		place-items: center;
		height: 100%;
		position: relative;
		background: rgb(131,58,180);
		background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
	}
	input, button {
		border-radius: 20px;
		padding: .8rem;
		outline: none;
		text-align: center;
	}
	.heart {
    	position: absolute;
    	bottom: 2rem;
    	height: 6rem;
    	width: 6rem;
    	stroke: white;
	}
	img {
    	/*max-height: 40vh;
    	width: 60vw;*/
    	object-fit: cover;
		object-position: bottom center;
		border-radius: 5px;
		box-shadow: 0 10px 10px 10px rgba(19, 19, 19, 0.301);
	}
	.favorite {
		position: relative;
	}
	.favorites {
    	max-height: 60vh;
    	overflow: scroll;
    	display: grid;
    	gap: .2rem;
    	grid-template-columns: repeat(4, 200px);
	}
	.favorites img {
   		width: 100%;
    	height: 200px;
    	object-fit: cover;
	}
	.favorites .heart {
		position: absolute;
		align-items: center;
		max-width: 20px;
	}
	header {
		position: absolute;
		top: 2rem;
		width: 100%;
		display: grid;
		padding: 0 40vw 0 40vw;
	}
	h2 {
		color: white;
	}
</style>