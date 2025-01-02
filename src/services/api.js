import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGJiMTg2ZTRmOTBkNDQ5OTI2NjM1ZjkyZDBhOGY3NCIsIm5iZiI6MTczNTYzNjg4Mi4zMzMsInN1YiI6IjY3NzNiNzkyM2ZjNzZlYTU4ODkyYTAwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6kXXZbr0rFPhppQMgS-3RGomHFzG9kaCkqVbP1CynA";

export const fetchPopularMovies = async () => {
  const { data } = await axios.get("/movie/popular", {
    params: {
      language: "en-US",
      page: 1,
    },
  });
  return data.results;
};

export const fetchMoviesById = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      language: "en-US",
    },
  });
  return data;
};

export const fetchMovieSearch = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
  );
  return data.results;
};

export const fetchMovieCast = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
};
