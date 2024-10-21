import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../tmdbAPI";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { moviesId: movieId } = useParams();

  useEffect(() => {
    async function fetchCasts(movieId) {
      const data = await getMovieCredits(movieId);
      setCasts(data.data.cast);
    }

    fetchCasts(movieId);
  }, [movieId]);

  console.log(casts);
  return (
    <>
      <ul className={css.castList}>
        {casts.map((item) => (
          <li key={item.id} className={css.castCard}>
            <div>
              <img
              className={css.castImg}
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt=""
                height="250px"
              />
              <h3>{item.name}</h3>
              <p>{item.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
