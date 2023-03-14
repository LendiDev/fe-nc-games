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
