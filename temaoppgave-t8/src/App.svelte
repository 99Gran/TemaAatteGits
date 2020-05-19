<script>
	import { apikeys } from ''
	let api_key = apikeys.dadjokes
	let joke
	let favorites = []
	let showFavs

	const getDadJoke = () => {
		fetch()
			.then( res => res.json() )
				.then ( json => {

				})
	}
</script>

<main>
	<h1>Dad Jokes</h1>
	<input placeholder='Search for dad joke' type="text">
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
</style>