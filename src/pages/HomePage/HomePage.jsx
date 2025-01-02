import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
