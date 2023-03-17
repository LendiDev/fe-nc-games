export const errors = {
  category: {
    notFound: {
      statusCode: 404,
      header: "Category not found",
      message:
        "Oops, it seems like the reviews category you are looking for doesn't exist",
    },
  },
  reviews: {
    badRequest: {
      statusCode: 400,
      header: "Something is not right",
      message:
        "Oops, it looks like there was a problem with your request. Please check your URL and try again.",
    },
    pageNotFound: {
      statusCode: 404,
      header: "Page not found",
      message:
        "Oops, it looks like there was a problem with your request. Please check your URL and try again.",
    },
    notFound: "Something went wrong. Couldn't fetch reviews.",
  },
  review: {
    notFound: {
      statusCode: 404,
      header: "Review not found",
      message:
        "Oops, it seems like the review you are looking for doesn't exist",
    },
  },
  default: {
    notFound: {
      statusCode: 404,
      header: "Page not found",
      message:
        "Oops, it seems like the page you are looking for doesn't exist.",
    },
  },
};
