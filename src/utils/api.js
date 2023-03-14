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

export const fetchUser = (username) => {
  return reviewsApi.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const fetchUsers = () => {
  return reviewsApi.get(`/users`).then(({ data }) => {
    return data.users;
  });
};

export const updateReview = (review_id, { inc_votes = 0 }) => {
  return reviewsApi.patch(`/reviews/${review_id}`, { inc_votes: inc_votes });
};

export const postNewComment = (review_id, comment) => {
  return reviewsApi
    .post(`/review/${review_id}/comments`, comment)
    .then(({ data }) => {
      return data.insertedComment;
    });
};
