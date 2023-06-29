import axios from "axios";

const PARAMS = {
  api_key: "e11933f426665230c05914275e20f129",
  language: "en-US",
}

export async function getTrending() {
  try {
    const response = await axios("https://api.themoviedb.org/3/trending/movie/day?", { params: PARAMS });
    return response.data.results;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getSearchMovies(searchQuery) {
  try {
    const response = await axios(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&page=1`, { params: PARAMS });
    return response.data.results;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}?`, { params: PARAMS });
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getMovieCredits(movieId) {
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?`, { params: PARAMS });
    return response.data.cast;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/reviews?page=1`, { params: PARAMS });
    return response.data.results;
  }
  catch (error) {
    console.log(error);
  }
}

const TheMovieDBAPI = {
  getTrending,
  getSearchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
}

export default TheMovieDBAPI;