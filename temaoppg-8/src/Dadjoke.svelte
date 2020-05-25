<script>
    import { BookmarkIcon} from 'svelte-eva-icons'

    export let dadjoke
    export let addToFaves
    export let favorites
</script>


<div class="dadjoke">
	<h3>{dadjoke}</h3>
	<div class='bookmark' on:click={()=>addToFaves(dadjoke)} style={favorites.includes(dadjoke) ? 'fill: #5946E8' : 'fill:white'}>
		<BookmarkIcon/>
	</div>
</div>


<style>
    .dadjoke {
        display: grid;
        grid-template-columns: 8fr 1fr;
        color: #eee;
        overflow: scroll;
        align-items: center;
    }
</style>