<script>
	import Activity from './components/Activity.svelte'
	let activity = {}
	let show = false
	let type = ''
	let participants = ''
	const getActivity = () => {
		show = false
		fetch(`https://www.boredapi.com/api/activity?participants=${participants}&type=${type}`)
		//fetch('https://www.boredapi.com/api/activity?' + type)
			.then ( res => res.json() )
				.then( json => { 
					activity = json 
					show = true
				} )
	}
</script>

<main>
	<button on:click = {getActivity}>HIT ME</button>
	<div class="flexbox">
	<select bind:value={type}>
    	<option value='busywork'>Busywork</option>
    	<option value='charity'>Charity</option>
    	<option value='cooking'>Cooking</option>
    	<option value='diy'>DIY</option>
    	<option value='education'>Education</option>
    	<option value='music'>Music</option>
    	<option value='recreational'>Recreational</option>
    	<option value='relaxation'>Relaxation</option>
    	<option value='social'>Social</option>
	</select>
	<select bind:value={participants}>
    	<option value='1'>1 person</option>
    	<option value='2'>2 persons</option>
    	<option value='3'>3 persons</option>
    	<option value='4'>4 persons</option>
    	<option value='5'>5 persons</option>
    	<option value='8'>8 persons</option>
	</select>
	</div>
	{#if show}
		 <Activity {activity} />
	{:else}
		 <h1>Click Hit Me</h1>
	{/if}
</main>

<style>
	main {
		display: grid;
		place-items: center;
		height: 100vh;
		position: relative;
		background: rgb(127,0,255);
		background: linear-gradient(90deg, rgba(127,0,255,1) 0%, rgba(225,0,255,1) 100%);
	}

	h1 {
		color: white;
	}

	button {
		position: absolute;
		top: 2rem;
		background: white;
		color: black;
		cursor: pointer;
		border: none;
		padding: 1rem;	
		border-radius: 3px;
	}

	select {
		margin: .5rem;
	}

	.flexbox {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>