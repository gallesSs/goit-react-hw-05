import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { fetchMovieSearch } from "../../services/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query) {
      const getData = async () => {
        const data = await fetchMovieSearch(query);
        setMovies(data);
      };
      getData();
    }
  }, [query]);

  const handleSetQuery = (newValue) => {
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };
  console.log(query);

  return (
    <div>
      <SearchBar handleSetQuery={handleSetQuery} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
