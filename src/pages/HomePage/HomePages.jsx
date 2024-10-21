import { useEffect, useState } from "react";
import { getArticles } from "../../tmdbAPI";
import css from "./HomePage.module.css";
import MovieList from '../../components/MovieListt/MovieList';


export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch  {
        setError(true);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div className={css.container}>
      {error && (
        <p className={css.errorMessage}>
          Something went wrong: {error.message}
        </p>
      )}
      <h1 className={css.heading}>Trending today</h1>
      {articles.length > 0 && <MovieList movies={articles}/>}
    </div>
  );
}
