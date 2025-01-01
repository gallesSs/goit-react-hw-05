import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const Navigation = lazy(() => import("./Components/Navigation/Navigation.jsx"));
const MovieDetailsPage = lazy(
  () => import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"),
);
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const MovieCast = lazy(() => import("./Components/MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(
  () => import("./Components/MovieReviews/MovieReviews.jsx"),
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
