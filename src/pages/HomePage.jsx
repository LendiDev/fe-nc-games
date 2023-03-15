import { Link } from "react-router-dom";
import CategoriesNav from "../components/CategoriesNav";
import WelcomeSection from "../components/WelcomeSection";

const HomePage = () => {
  return (
    <main>
      <CategoriesNav />
      <WelcomeSection />
      <Link to="/reviews">View all reviews</Link>
    </main>
  );
};

export default HomePage;
