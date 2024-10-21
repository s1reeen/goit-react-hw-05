import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getMovieDetails } from "../../tmdbAPI";
import { useNavigate, Outlet } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const { moviesId: movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const prevLocation = useRef(location.state?.from || "/");

  const handleGoBack = () => {
    navigate(prevLocation.current);
  };

  useEffect(() => {
    async function fetchMovie(movieId) {
      const data = await getMovieDetails(movieId);
      setMovie(data.data);
    }
    fetchMovie(movieId);
  }, [movieId]);

  return (
    <>
      <button onClick={handleGoBack} className={css.btn}>
        Go back
      </button>
      {movie && (
        <>
          <div className={css.container}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
                className={css.img}
              />
            </div>
            <div className={css.movieInfo}>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
