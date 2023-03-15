import { useParams } from "react-router-dom";
import CategoriesNav from "../components/CategoriesNav";
import Reviews from "../components/Reviews";

const ReviewsPage = () => {
  const { category_slug } = useParams();

  return (
    <main>
      <CategoriesNav category={category_slug} />
      <Reviews category={category_slug} />
    </main>
  );
};

export default ReviewsPage;
