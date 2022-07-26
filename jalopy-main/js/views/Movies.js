export default function MoviesView(props) {
    return `<h1>Movies</h1>`;
}

export async function MoviesEvents() {
    let movie = '';
    fetch('https://ballistic-snapdragon-silica.glitch.me/movies')
        .then(function (response) {
            console.log('fetch complete')
            if(response.status !== 200) {
                console.log('fetch failed');
            } else {
                return response.json();
            }
        }).then(function(data) {
            console.log(data);
    });
}