// FETCH REQUEST FOR GLITCH MOVIES API
(async function() {
	let movie = '';
	fetch('https://glitch.com/edit/#!/ballistic-snapdragon-silica')
		.then(function (response) {
			console.log('fetch complete')
			if(response.status !== 200) {
				console.log('fetch failed');
			} else {
				return response.json();
			}
		}).then(function(data) {
			console.log(data)
			console.log(data.movie);
		});
	const response = await fetch('https://glitch.com/edit/#!/ballistic-snapdragon-silica');
	movie = await response.json();
	console.log(movie);
}())