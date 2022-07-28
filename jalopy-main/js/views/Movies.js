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
		    <div id="left-spacer-div"></div>
			<div id="movies-div">
				${addMovies(props.movies)}
<!--				 DIV CONTAINING BUTTON TO ADD NEW MOVIE-->
				<div id="new-movie-div">
					<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#movieModal">Add a Film</button>
<!--					<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>-->
				</div>
<!--				DIV CONTAINING MOVIE MODAL FORM-->
				<div class="modal fade" id="movieModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				    <div class="modal-dialog" role="document">
				        <div class="modal-content">
				            <div class="modal-header">
                                <h5 class="modal-title" id="movieModalLabel">Add a Film:</h5>
<!--                                <button type="button" class="Close" data-dismiss="modal" aria-label="Close">-->
<!--                                    <span aria-hidden="true">&times;</span>-->
<!--                                </button>-->
                            </div>
                            <div class="modal-body">
                                <form id= "create-form">
                                    <div class="form-group">
                                        <label for="titleInput">Title:</label>
                                        <input type="text" class="form-control" id="newMovieText" placeholder="Requiem for a Dream">
                                    </div>
                                    <div class="form-group">
                                        <label for="directorInput">Director:</label>
                                        <input type="text" class="form-control" id="newDirectorText" placeholder="Darren Aronofsky">
                                    </div>
                                    <div class="form-group">
                                        <label for="yearInput">Release Year:</label>
                                        <input type="text" class="form-control" id="newYearText" placeholder="2000">
                                    </div>
                                    <div class="form-group">
                                        <label for="ratingInput">MPA Rating:</label>
                                        <input type="text" class="form-control" id="newRatingText" placeholder="R">
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn" data-bs-dismiss="modal" id="addMovieBtn">Add Film</button>
                            </div>
				        </div>
				    </div>
				</div>
                <!-- div for edit movie modal				-->
				<div id="edit-movies">
				    <div class="modal fade" id="editMovieModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="movieModalLabel">Edit a Film:</h5>
    <!--                                <button type="button" class="Close" data-dismiss="modal" aria-label="Close">-->
    <!--                                    <span aria-hidden="true">&times;</span>-->
    <!--                                </button>-->
                                </div>
                                <div class="modal-body">
                                    <form id= "create-form">
                                        <div class="form-group">
                                            <label for="titleInput">Title:</label>
                                            <input type="text" class="form-control" id="editMovieText" placeholder="Requiem for a Dream">
                                        </div>
                                        <div class="form-group">
                                            <label for="directorInput">Director:</label>
                                            <input type="text" class="form-control" id="editDirectorText" placeholder="Darren Aronofsky">
                                        </div>
                                        <div class="form-group">
                                            <label for="yearInput">Release Year:</label>
                                            <input type="text" class="form-control" id="editYearText" placeholder="2000">
                                        </div>
                                        <div class="form-group">
                                            <label for="ratingInput">MPA Rating:</label>
                                            <input type="text" class="form-control" id="editRatingText" placeholder="R">
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn" data-bs-dismiss="modal" id="addEditedMovieBtn">Add Edited Film</button>
                                </div>
                            </div>
                        </div>
				    </div>
                </div>
			</div>
			<div id="right-spacer-div"></div>
		</main>
<!--		${addEventListenersEdit(props.movies)}-->
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
					<button class="btn btn-primary editBtn" id="movieEditBtn${movie.id}" type="button" data-bs-toggle="modal" data-bs-target="#editMovieModal" data-bs-title=" " >edit film</button>
					<button class="btn btn-warning" id="movieDeleteBtn" type="button">Delete this film</button>

				</div>
		`;
    }

    return html;
}

// EVENT LISTENER FOR ADD NEW MOVIE BUTTON
export function MoviesEvents() {
    const addMovieBtn = document.querySelector('#addMovieBtn');
    addMovieBtn.addEventListener('click', addNewMovie);

    // const editMovieBtn = document.querySelector('#movieEditBtn');
    // editMovieBtn.addEventListener('click', editMovie );
    addEventListenersEdit()
}

function addEventListenersEdit(){
   const editBtns = document.querySelectorAll('.editBtn')
    editBtns.forEach(function (btn) {
        btn.addEventListener("click", function (event) {

            console.log("edit clicked");

            const cardParent = this.parentElement;
            const movieTitle = cardParent.children[0].innerHTML;
            const movieDirector = cardParent.children[1].innerHTML;
            const movieYear = cardParent.children[2].innerHTML;
            const movieRating = cardParent.children[3].innerHTML;
            const movieId = cardParent.children[4].innerHTML;
            // console.log(`
            // ${movieTitle} ${movieDirector} ${movieYear} ${movieRating} ${movieId}
            // `);
            document.querySelector("#editMovieText").value = movieTitle;

            let editModal = document.querySelector("#editMovieModal")
            editModal.addEventListener('show.bs.modal', function (event) {
                let editbtn = event.relatedTarget;
                let title = editbtn.getAttribute('data-bs-title');
                const titleInput = editMovieModal.querySelector("movieModalLabel")
            })
        })
    })


    // for (const movie of movies) {
    //     let editButton = document.getElementById(`movieEditBtn${movie.id}`)
    //     console.log("this log" + editButton);
    //     // editButton.addEventListener('click', editMovie)
    // }
}

//function to edit movie
function editMovie() {
alert("it's working");
}

// FUNCTION TO ADD A NEW MOVIE FROM FORM INPUT
function addNewMovie() {
    const titleInput = document.querySelector('#newMovieText');
    const title = titleInput.value.trim();
    const directorInput = document.querySelector('#newDirectorText');
    const director = directorInput.value.trim();
    const yearInput = document.querySelector('#newYearText');
    const year = yearInput.value.trim();
    const ratingInput = document.querySelector('#newRatingText');
    const rating = ratingInput.value.trim();


    if (title.length < 1) {
        // VALIDATION ALERT IF BLANK
        titleInput.classList.add('inputError');
        console.log('error');
        return;
    }
    if (director.length < 1) {
        directorInput.classList.add('inputError');
        console.log('error');
        return;
    }
    if (year.length < 1) {
        yearInput.classList.add('inputError');
        console.log('error');
        return;
    }
    if (rating.length < 1) {
        ratingInput.classList.add('inputError');
        console.log('error');
        return;
    }
    const newMovie = {
        title, director, year, rating
    }
    const requestOpts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // CONVERT OBJECT INTO STRING ELEMENT FOR FETCH REQUEST
        body: JSON.stringify(newMovie)
    }

    console.log('hello, earthling');
    fetch('https://ballistic-snapdragon-silica.glitch.me/movies', requestOpts)
        .then(function (response) {
            if (!response.ok) {
                // LOG ERROR FOR MOVIE SUBMISSION
            } else {
                // ADD MOVIE & REDIRECT WITHIN VIEW
                createView('/movies');
            }
        });
}

