<script>
	import Activity from './components/Activity.svelte'
	let activity = {}
	let show = false
	let type = 'recreational'
	const getActivity = () => {
		show = false
		fetch('https://www.boredapi.com/api/activity?' + type)
			.then ( res => res.json() )
				.then( json => { 
					activity = json 
					show = true
				} )
	}
</script>

<main>
	<button on:click = {getActivity}>HIT ME</button>
	<input type='text' bind:value={type}>
	<!--<Activity {activity}/>-->
	{#if show}
		 <Activity {activity} />
	{:else}
		 <h2>Click Hit Me</h2>
	{/if}
</main>

<style>
	main {
		display: grid;
		place-items: center;
		height: 100vh;
		position: relative;
	}

	button {
		position: absolute;
		top: 2rem;
		background: black;
		color: white;
		cursor: pointer;	
	}
</style>