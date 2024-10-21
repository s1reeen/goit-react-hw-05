import axios from "axios";

const APIKEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2E5NWRmODYxNGFjNWFhY2ViZWU3NTFjNTUyYzJlZSIsIm5iZiI6MTcyODY4MDY0MS40Mjg4MzIsInN1YiI6IjY3MDgwZDZlZDA2MTZjN2IxOWZiODVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NUg0XfgTGsK0TzdAeKfwJdwDSBjqKIRB0SGerNu5qHU";

export const getArticles = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week",
    {
      headers: {
        Authorization: APIKEY,
      },
      params: {
        language: "en-US",
      },
    }
  );

  return res.data.results;
};

export const getMovieDetails = async (movieId) => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
      Authorization: APIKEY,
    },
    params: {
      language: "en-US",
    },
  });

  return res;
};

export const getMovieSearch = async (topic) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${topic}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: APIKEY,
      },
      params: {
        language: "en-US",
      },
    }
  );
  return res;
};

export const getMovieCredits = async (movieId) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        Authorization: APIKEY,
      },
      params: {
        language: "en-US",
      },
    }
  );
  return res;
};

export const getMovieReviews = async (movieId) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    {
      headers: {
        Authorization: APIKEY,
      },
      params: {
        language: "en-US",
      },
    }
  );
  return res;
};
