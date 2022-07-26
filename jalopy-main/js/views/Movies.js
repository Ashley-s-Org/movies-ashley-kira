import createView from "../createView.js";
// DEFINE GLOBAL VARIABLE FOR MOVIES
let movies = ''

// FUNCTION TO SET MOVIES VIEW-SCREEN
export default function moviesView(props) {
    // SET MOVIES PARAMETER AS GLOBAL
	movies = props.movies
	let html = `
		<header id="moviesHeader">
			<h2 id="moviesTitle">.movies</h2>
			<p id="moviesAbout">a handpicked selection of cult classics</a></p>
		</header>
		<main>
			<div id="movies-div">
				${addMovies(props.movies)}
<!--				 DIV CONTAINING BUTTON TO ADD NEW MOVIE-->
				<div id="new-movie-div">
					<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#movieModal">+</button>
<!--					<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>-->
				</div>
<!--				DIV CONTAINING MOVIE MODAL FORM-->
				<div class="modal fade" id="movieModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        <form id= "create-form">
				          <div class="form-group">
				            <label for="titleInput">Tittle</label>
				            <input type="text" class="form-control" id="titleInput"
				                   placeholder="Enter title">
				          </div>
				          <div class="form-group">
				            <label for="directorInput">Director</label>
				            <input type="text" class="form-control" id="directorInput"
				                   placeholder="Director">
				          </div>
				          <div class="form-group">
				            <label for="yearInput">Year Movie Made</label>
				            <input type="text" class="form-control" id="yearInput"
				                   placeholder="Enter the year the movie was made">
				          </div>
				          <div class="form-group">
				            <label for="ratingInput">Rating of the Movie</label>
				            <input type="text" class="form-control" id="ratingInput"
				                   placeholder="Enter the Rating">
				          </div>
				        </form>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-primary" id="add-movie-btn">Add a new movie!</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		</main>
	`;
    return html;
}

// MODULAR FUNCTION TO ADD MOVIES FROM GLITCH API
function addMovies(movies) {
    let html = '';
    // FOR OF LOOP TO SORT EACH MOVIE AND ITS DETAILS INTO A CARD
    for (const movie of movies) {
        html += `
				<div class="movieCard">
					<p class="title">${movie.title}</p>
					<p class="director">${movie.director}</p>
					<p class="year">${movie.year}</p>
					<p class="rating">${movie.rating}</p>
					<p class="id">${movie.id}</p>
				</div>
		`;
    }
    return html;
}

// ATTACH JS TO VIEW SCREEN
export function MoviesEvents() {


}
// EVENT LISTENER FOR ADD NEW MOVIE BUTTON
export function addNewQuoteEvent() {
    const addMovieBtn = document.querySelector('#addMovieBtn');
    addBtn.addEventListener('click', addNewMovie);
}

// // FUNCTION TO ADD A NEW MOVIE FROM FORM INPUT
// function addNewMovie() {
    // USE .trim() TO TRIM WHITESPACE FROM A TEXT INPUT WHEN VALIDATING
    // const titleInput = document.querySelector('#newMovieText');
    // const title = titleInput.value.trim();
    // const directorInput = document.querySelector('#newDirectorText');
    // const director = directorInput.value.trim();
    // const yearInput = document.querySelector('#newYearText');
    // const year = yearInput.value.trim();
    // const ratingInput = document.querySelector('#newRatingText');
    // const rating = ratingInput.value.trim();
//
//     if (title.length < 1) {
//         // ADD ALERT OF SHAKE FUNCTION HERE FOR VALIDATION IF BLANK
//         titleInput.classList.add('inputError');
//         console.log('error');
//         return;
//     }
//     if (director.length < 1) {
//         directorInput.classList.add('inputError');
//         console.log('error');
//         return;
//     }
//     if (year.length < 1) {
//         yearInput.classList.add('inputError');
//         console.log('error');
//         return;
//     }
//     if (rating.length < 1) {
//         ratingInput.classList.add('inputError');
//         console.log('error');
//         return;
//     }
//     const requestOpts = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             // 'Authorization': QUOTES_API_KEY
//         },
//         // CONVERT OBJECT INTO STRING ELEMENT FOR FETCH REQUEST
//         body: JSON.stringify([{movie}])
//     }
//     fetch('https://ballistic-snapdragon-silica.glitch.me/movies', requestOpts)
//         .then(function (response) {
//             if (!response.ok) {
//                 // LOG ERROR FOR QUOTE
//             } else {
//                 // ADD QUOTE & REDIRECT WITHIN VIEW
//                 createView('/movies');
//             }
//         });
// }

