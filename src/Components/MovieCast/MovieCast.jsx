import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../services/api.js";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };
    getData();
  }, [movieId]);
  if (!cast) return null;
  return (
    <div>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              className={s.img}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : "https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg"
              }
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
