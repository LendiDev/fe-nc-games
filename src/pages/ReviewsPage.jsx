import { useSearchParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import ReviewsFilter from "../components/ReviewsFilter";
import SectionHeader from "../components/SectionHeader";

const ReviewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <main>
      <SectionHeader title="Reviews" />
      <ReviewsFilter searchParams={searchParams} setSearchParams={setSearchParams} />
      <Reviews searchParams={searchParams} />
    </main>
  );
};

export default ReviewsPage;
