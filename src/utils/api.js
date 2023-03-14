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

export const updateReview = (review_id, { inc_votes = 0 }) => {
  return reviewsApi.patch(`/reviews/${review_id}`, { inc_votes: inc_votes });
};
