import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";


const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <SectionHeader title={"Welcome to NC Board Games"} />
      <p>Here you can find the best reviews on the board games!</p>
      <Link to="/reviews">View all reviews</Link>
    </section>
  );
};

export default WelcomeSection;
