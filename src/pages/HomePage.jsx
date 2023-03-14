import { Link } from "react-router-dom";
import WelcomeSection from "../components/WelcomeSection";

const HomePage = () => {
  return (
    <main>
      <WelcomeSection />
      <Link to="/reviews">View all reviews</Link>
    </main>
  );
};

export default HomePage;
