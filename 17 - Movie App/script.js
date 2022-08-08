let API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8e24912843fe6f503010bf216da88eb3&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=8e24912843fe6f503010bf216da88eb3&query="'


const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

const inTheatres = document.getElementById('inTheatres')
inTheatres.addEventListener('click', () => {
    API_URL = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=8e24912843fe6f503010bf216da88eb3&page=1'
    getMovies(API_URL)

    showMovies()
})

const topRated = document.getElementById('top')
topRated.addEventListener('click', () => {
    API_URL = 'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=8e24912843fe6f503010bf216da88eb3'
    getMovies(API_URL)

    showMovies()
})

const drama = document.getElementById('drama')
drama.addEventListener('click', () => {
    API_URL = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=8e24912843fe6f503010bf216da88eb3&page=1'
    getMovies(API_URL)

    showMovies()
})

// get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})
