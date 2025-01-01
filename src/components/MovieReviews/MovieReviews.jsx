import s from "./MovieReviews.module.css";
import { useParams } from "react-router";
import { Suspense, useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api.js";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {reviews.map((review) => (
            <li className={s.review} key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default MovieReviews;
