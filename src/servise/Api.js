import axios from 'axios';


const KEY = `ccfe38522ca5ce6e07118893ca908be1`;
const URL=`https://api.themoviedb.org/3`


export async function getPopularMovies(setTopMovies) {
    try {
      const response = await axios.get(`${URL}/trending/movie/day?api_key=${KEY}`);
      const topMovies = response.data.results;
      setTopMovies(topMovies)
  } catch (error) {
      console.error(error);
  }
}

 export async  function MovieSearch(searchQuery) {
   try {
    const response = await axios.get(`${URL}/search/movie?api_key=${KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`);
    const MoveiInfo = response.data.results;
    return MoveiInfo;
    } catch (error) {
  console.error(error);
}
};
    
export  async function getMovieInfo(movieId) {
  try {
    const response = await axios.get(`${URL}/movie/${movieId}?api_key=${KEY}`);
    const movieInfo = response.data;
    return movieInfo;
  } catch (error) {
      console.error(error);
  }
};

export  async function getCast(movieId) {
  try {
      const response = await axios.get(`${URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
      const MovieCast = response.data.cast;
    return MovieCast;

  } catch (error) {
      console.error(error);
  }
};
    
export async function getRewies(movieId) {
    try {
        const response = await axios.get(`${URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`);
        const MovieReviews= response.data.results;
      return MovieReviews;

    } catch (error) {
        console.error(error);
    }
};


let API= {
  getPopularMovies,
  MovieSearch,
  getMovieInfo,
  getCast,
  getRewies,
}

export default API;

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
