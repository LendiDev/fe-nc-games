import { errors } from "../data/errors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReview } from "../utils/api";

import CommentAdder from "../components/CommentAdder";
import Comments from "../components/Comments";
import SingleReviewCard from "../components/SingleReviewCard";
import ErrorPage from "./ErrorPage";
import LoadingSpinner from "../components/LoadingSpinner";

const SingleReviewPage = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState(null);
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReview(review_id)
      .then((reviewData) => {
        setReview(reviewData);
      })
      .catch((error) => {
        if (error.response.status === 404 || error.response.status === 400) {
          setError(errors.review.notFound);
        } else {
          setError("Couldn't fetch a review.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [review_id]);

  if (isLoading) {
    return (
      <main>
        <LoadingSpinner what="review" fullscreen />
      </main>
    );
  }

  if (error?.header && error?.message && error?.statusCode) {
    return (
      <ErrorPage
        statusCode={error.statusCode}
        header={error.header}
        message={error.message}
      />
    );
  }

  return (
    <main>
      <div className="single-review-page">
        {error && <p>{error}</p>}
        {review && (
          <>
            <SingleReviewCard
              review={review}
              commentsLength={comments && comments.length}
            />
            <CommentAdder setComments={setComments} review_id={review_id} />
            <Comments
              setComments={setComments}
              comments={comments}
              review_id={review_id}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default SingleReviewPage;
