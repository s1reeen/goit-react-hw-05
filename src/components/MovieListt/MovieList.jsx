import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.articlesList}>
      {movies.map((item) => (
        <li key={item.id} className={css.articleItem}>
          <Link
            to={`/movies/${item.id}`}
            state={{ from: location }}
            className={css.articleLink}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
