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
      <SectionHeader title="Reviews" />
      <CategoriesNav searchParams={searchParams} category={category_slug} />
      <ReviewsFilter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Reviews category={category_slug} searchParams={searchParams} />
    </main>
  );
};

export default ReviewsPage;
