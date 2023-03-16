import { useParams, useSearchParams } from "react-router-dom";
import CategoriesNav from "../components/CategoriesNav";
import Reviews from "../components/Reviews";
import ReviewsFilter from "../components/ReviewsFilter";
import SectionHeader from "../components/SectionHeader";

const ReviewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category_slug } = useParams();

  return (
    <main>
      <CategoriesNav searchParams={searchParams} category={category_slug} />
      <SectionHeader title="Reviews" />
      <ReviewsFilter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Reviews category={category_slug} searchParams={searchParams} />
    </main>
  );
};

export default ReviewsPage;
