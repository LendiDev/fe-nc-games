import axios from "axios";

const reviewsApi = axios.create({ baseURL: "https://nc-games.lendi.dev/api" });

export const fetchCategories = () => {
  return reviewsApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const fetchReviews = ({
  category,
  limit = 10,
  searchParams = {},
}) => {
  const searchParamsObject = Object.fromEntries(searchParams);

  return reviewsApi
    .get("/reviews", {
      params: { category, limit, ...searchParamsObject },
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
    .post(`/reviews/${review_id}/comments`, comment)
    .then(({ data }) => {
      return data.insertedComment;
    });
};

export const updateComment = (comment_id, { inc_votes = 0 }) => {
  return reviewsApi.patch(`/comments/${comment_id}`, { inc_votes: inc_votes });
};

export const deleteComment = (comment_id) => {
  return reviewsApi.delete(`/comments/${comment_id}`);
};
