import { Link, useLocation } from "react-router";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={s.list}>
        {movies.map((movie) => (
          <Link
            className={s.link}
            to={`movies/${movie.id.toString()}`}
            key={movie.id}
            state={location}
          >
            {movie.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
