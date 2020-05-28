<script>
    import { BookmarkIcon} from 'svelte-eva-icons'

    export let dadjoke
    export let addToFaves
    export let favorites
    export let favorite = false
</script>


<div class="dadjoke {favorite ? 'fav' : 'notfav'}">
	<h3>{dadjoke}</h3>
	<div class='bookmark' on:click={()=>addToFaves(dadjoke)} style={favorites.includes(dadjoke) ? 'fill: #5946E8' : 'fill:white'}>
		<BookmarkIcon/>
	</div>
</div>


<style>
    .dadjoke.notfav {
        color: #eee;
        text-align: center;
        display: grid;
    }
    .dadjoke.fav {
        display: grid;
        grid-template-columns: 8fr 1fr;
        color: #eee;
        overflow: scroll;
        align-items: center;
    }
    .fav.bookmark {
        margin: 1rem;
    }
    .bookmark {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
        width: 100%;
    }
</style>