import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";
import { fetchMovieSearch } from "../../services/api.js";
import s from "./MoviesPage.module.css";

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
      <ul className={s.list}>
        {movies.map((movie) => (
          <Link className={s.link} to={movie.id.toString()} key={movie.id}>
            {movie.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
