import s from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../services/api.js";
import { Link } from "react-router";

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
      <ul className={s.list}>
        {movies.map((movie) => (
          <Link
            className={s.link}
            to={`movies/${movie.id.toString()}`}
            key={movie.id}
          >
            {movie.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
