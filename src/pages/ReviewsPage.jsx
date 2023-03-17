import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CategoriesNav from "../components/CategoriesNav";
import Reviews from "../components/Reviews";
import ReviewsFilter from "../components/ReviewsFilter";
import SectionHeader from "../components/SectionHeader";
import useTitle from "../hooks/useTitle";
import ErrorPage from "./ErrorPage";

const ReviewsPage = () => {
  useTitle('Reviews');

  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const { category_slug } = useParams();

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
      <CategoriesNav searchParams={searchParams} category={category_slug} />
      <SectionHeader title="Reviews" />
      <ReviewsFilter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Reviews
        error={error}
        setError={setError}
        category={category_slug}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </main>
  );
};

export default ReviewsPage;
