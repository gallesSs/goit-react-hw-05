import React, { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router";
import { fetchMoviesById } from "../../services/api.js";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);
  if (!movie) {
    return null;
  }

  const release = movie.release_date;
  const year = release.split("-")[0];
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div className={s.card}>
        <h2 className={s.title}>
          {movie.title}
          <span> ({year})</span>
        </h2>
        <img
          className={s.poster}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
          width="200"
          height="200"
        />
        <div className={s.overview}>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
        <div className={s.genres}>
          <h2>Genres</h2>
          <ul className={s.genresList}>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <p className={s.score}>User score: {Math.round(movie.popularity)}%</p>
      </div>
      <hr />
      <h3>Additional information</h3>
      <nav>
        <Link to="cast">Show cast</Link>
        <Link to="reviews">Show reviews</Link>
      </nav>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
