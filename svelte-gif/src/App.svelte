
<script>
	let q = ''
 	const limit = 1
	let api_key = 'glSDbJkqVsLqasuMmVZ4EB2cWEkuZDMy'
	let gif

	const getImage = () => {
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
		<input placeholder="Search for gifs" type="text" bind:value={q} on:keydown={(key) => key.key == "Enter"?getImage():""}>
		<button on:click={getImage}>I'm bored</button>
	</header>

{#if gif}
    <img src="{gif}" alt="{q}">
{:else}
    <h2>Type on top if you're bored</h2>
{/if}  
</main>

<style>
	:global(body, html){
		margin:0;
		padding:0;
	}
	:global(*){
		box-sizing:border-box;
	}
	main {
		display: grid;
		place-items: center;
		height: 100%;
		background: rgb(131,58,180);
		background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
	}
	input, button {
		border-radius: 20px;
		padding: .8rem;
		outline: none;
		text-align: center;
	}
	header{
		position: absolute;
		top: 2rem;
		width: 100%;
		display: grid;
		padding: 0 40vw 0 40vw;
	}
	h2 {
		color: white;
	}
	img {
		border-radius: 5px;
		box-shadow: 0 10px 10px 10px rgba(19, 19, 19, 0.301);
	}
</style>