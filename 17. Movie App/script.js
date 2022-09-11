const api_key ='0441c4db2a92748936c3e9dddc8a3b2c';
const baseUrl = 'https://api.themoviedb.org';

const API_URL = `${baseUrl}/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
const IMG_PATH = `${baseUrl}/t/p/w1280`;
const SEARCH_URL = `${baseUrl}/3/search/movie?api_key=${api_key}&query="`;


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

//get initial data
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results)
    
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie=>{
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <div style="height: 80%">
                <img src="${'https://image.tmdb.org/t/p/original' + poster_path}" alt="${title}">
            </div>
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;
        main.appendChild(movieEl);
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm)

        search.value = '';
    } else {
        window.location.reload();
    }
})