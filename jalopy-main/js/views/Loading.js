// import createView from "../createView";
//
export default function Loading(props) {
    return `
        <div id="loadingIcon"></div>
    `;
}
// console.log(Loading);

// SELECT LOADING ELEMENT
const loader = document.querySelector("#loading");

// SHOW LOADING ELEMENT
function displayLoading() {
    loader.classList.add('display');
    // STOP LOADING ELEMENT AFTER SET TIME
    setTimeout(() => {
        loader.classList.remove('display');
    }, 5000);
}

// HIDE LOADING ELEMENT
function hideLoading() {
    loader.classList.remove('display');
}

// FETCH NEW MOVIE DATA
function fetchHandler(e) {
    displayLoading()
    fetch('https://ballistic-snapdragon-silica.glitch.me/movies', requestOpts)
        .then(function (response) {
            if (!response.ok) {
                // LOG ERROR FOR MOVIE SUBMISSION
            } else {
                // ADD MOVIE & REDIRECT WITHIN VIEW
                createView('/movies');
            }
        })
        // .then(json => {
        //     hideLoading()
        // })
}
