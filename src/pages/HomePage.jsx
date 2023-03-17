import CategoriesNav from "../components/CategoriesNav";
import WelcomeSection from "../components/WelcomeSection";
import useTitle from "../hooks/useTitle";

const HomePage = () => {
  useTitle('Home');

  return (
    <main>
      <CategoriesNav />
      <WelcomeSection />
    </main>
  );
};

export default HomePage;
