export default function MoviesView(props) {
    return `

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

<div class="container">
    <h1>Quotes</h1>
    <div class="card">
        <div class="card-body">
            <p class="dog-fact">ABC</p>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <p class="dog-fact">ABC</p>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <p class="dog-fact"></p>
        </div>
    </div>
</div>
`;
}

export function MoviesEvents() {
}