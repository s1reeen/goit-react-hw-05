import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../tmdbAPI";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId: movieId } = useParams();

  useEffect(() => {
    async function fetchReviews(movieId) {
      const data = await getMovieReviews(movieId);
      setReviews(data.data.results);
    }

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <div className="reviews">
      {reviews.length === 0 ? (
        <p>No reviews available for this movie.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3 className="review-author">
              Author: {review.author_details?.name || review.author}
            </h3>
            {review.content ? (
              <p className="review-content">{review.content}</p>
            ) : (
              <p className="no-content">No review content available</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}
