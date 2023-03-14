import axios from "axios";

const reviewsApi = axios.create({ baseURL: "https://nc-games.lendi.dev/api" });

export const fetchReviews = () => {
  return reviewsApi
    .get("/reviews", {
      params: { limit: 50 },
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchReview = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const fetchCommentsForReview = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};
