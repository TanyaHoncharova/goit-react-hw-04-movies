import axios from 'axios';


// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

const KEY = 'ccfe38522ca5ce6e07118893ca908be1';
const BASE_URL = 'https://api.themoviedb.org';


async function APIgetInfo(url) {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        new Error('Not found');
        }
}

export function getPopularMovies() {
  return APIgetInfo(`${BASE_URL}/3/trending/all/day?api_key=${KEY}`);
}

export function getMoviesByQuery(query) {
  return APIgetInfo(
    `${BASE_URL}/3/search/movie?api_key=${KEY}&query=${query}&page=1`,
  );
}

export function getMovieDetails(movieId) {
  return APIgetInfo(`${BASE_URL}/3//movie/${movieId}?api_key=${KEY}`);
}

export function getAboutActors(movieId) {
  return APIgetInfo(
    `${BASE_URL}/3//movie/${movieId}/credits?api_key=${KEY}`,
  );
}

export function getReviews(movieId) {
  return APIgetInfo(
    `${BASE_URL}/3//movie/${movieId}/reviews?api_key=${KEY}`,
  );
}

// топ фильмы 
// https://api.themoviedb.org/3/trending/movie/week?api_key=ccfe38522ca5ce6e07118893ca908be1 

//конкретный фильм

// .https://api.themoviedb.org/3/search/movie?api_key=ccfe38522ca5ce6e07118893ca908be1&language=en-US&page=1&include_adult=false

//  запрос полной информации о фильме для страницы кинофильма.

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=ccfe38522ca5ce6e07118893ca908be1&language=en-US

//запрос информации о актёрском составе для страницы кинофильма.

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=ccfe38522ca5ce6e07118893ca908be1&language=en-US

//запрос обзоров для страницы кинофильма.
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=ccfe38522ca5ce6e07118893ca908be1&language=en-US&page=1
