<script>
	const { remote } = require('electron')
	const { Menu, MenuItem } = remote
	let info = 'Nothing happening yet'

	const showNotification = (title, message) => {
    	let myNotification = new Notification(title, {
      	body: message
    	})
    	myNotification.onclick = () => {
        info = 'Notification clicked'
    	}
	}

	const amIOnline = () => {
   		 window.alert(navigator.onLine ? 'you\'re online ma\'am' : 'you\'re offline')
    	info = 'Alert accepted'
	}

	const menu = new Menu()
		menu.append(new MenuItem({ label: 'menu 1', click() { info = 'item 1 clicked' } }))
		menu.append(new MenuItem({ type: 'separator' }))
		menu.append(new MenuItem({ label: 'menu 2', click() { info = 'item 2 clicked' } } ))

	const context = e => {
  		e.preventDefault()
  		menu.popup({ window: remote.getCurrentWindow() })
		}
</script>

<main>
	<hr>
	<div class="stuff" on:contextmenu={context}></div>
    <h1>Svelte in Electron</h1>
    <p>{info}</p>
	<button on:click={ () => showNotification('Hei', 'Hvordan går det i dag?') }>Klikk meg</button>
	<button on:click={ () => amIOnline() }>2 b or not 2 b online</button>
</main>

<style>
	main {
		display: grid;
		padding: 10vw;
		position: absolute;
		text-align: center;
	}
	button {
		width: 20vw;
	}
	.stuff {
		width: 100%;
		height: 100px;
		background-color: antiquewhite;
	}
</style>