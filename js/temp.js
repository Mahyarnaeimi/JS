const game = {
  name: "Example Game",
  "year": 2023,
  "developer": "Example Studio",
  is_good: null,
  playing: false,

  play : () => {
	game.playing = false;
	console.log(`Playing ${game.name}...`);
  },

  stop : () => {
	game.playing = false;
	console.log(`Stopped playing ${game.name}.`);
  }
}

  game.play ();
  console.log(game);

  setTimeout(()=>{
	game.completed = true;
	game.is_awesome = true;
	game.stop();
	console.log(game);
}, 5000)