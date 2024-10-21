import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieSearch } from "../../tmdbAPI";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from '../../components/MovieListt/MovieList';


export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(() => {
    const savedMovies = sessionStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });
  const [error, setError] = useState(null);

  const topic = searchParams.get("query") || "";

  const onSubmit = (newTopic) => {
    setMovies([]); 
    setError(false);
    setSearchParams({ query: newTopic });
  };

  useEffect(() => {
    async function fetchMoviesList() {
      if (topic === "") {
        return;
      }

      try {
        const data = await getMovieSearch(topic);
        setMovies(data.data.results);
        sessionStorage.setItem("movies", JSON.stringify(data.data.results));
      } catch {
        setError(true);
      }
    }

    fetchMoviesList();
  }, [topic]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies && <MovieList movies={movies} />}
      {error && <p>The movie list could not be loaded. Please try again.</p>}
    </>
  );
}
