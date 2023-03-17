import { useEffect, useState } from "react";
import { errors } from "../data/errors";
import { fetchReviews } from "../utils/api";
import LoadingSpinner from "./LoadingSpinner";
import Pagination from "./Paginations";
import ReviewCard from "./ReviewCard";

const Reviews = ({
  searchParams,
  category,
  error,
  setError,
  pagination = true,
  setSearchParams,
}) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setReviews([]);
    fetchReviews({ category, searchParams, limit: 5 })
      .then((reviewsData) => {
        setIsLoading(false);
        setReviews(reviewsData.reviews);
        setTotalPages(reviewsData.max_pages);

        if (searchParams.get('p') > reviewsData.max_pages || reviewsData.max_pages < 1) {
          setError(errors.reviews.pageNotFound);
        }
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          if (error.response.data.message.includes("Category")) {
            setError(errors.category.notFound);
          }
        } else if (error?.response?.status === 400) {
          setError(errors.reviews.badRequest);
        } else {
          setError(errors.reviews.notFound);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, category, searchParams, setError]);

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchParams((params) => ({
      ...Object.fromEntries(params),
      p: newPage,
    }));
  };

  return (
    <section>
      {error && <p>{error}</p>}
      {isLoading ? (
        <LoadingSpinner flexLoading size={50} borderWidth={8} topOffset={50} />
      ) : (
        <>
          <ul>
            {reviews.map((review) => (
              <ReviewCard key={review.review_id} review={review} />
            ))}
          </ul>
          {pagination && (
            <Pagination
              onPageChange={onPageChange}
              totalPages={totalPages}
              currentPage={currentPage}
              siblingCount={3}
            />
          )}
        </>
      )}
    </section>
  );
};

export default Reviews;
