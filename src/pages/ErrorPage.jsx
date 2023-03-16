import pageNotFoundLottie from "../assets/lottie/not_found.json";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import SectionHeader from "../components/SectionHeader";
const ErrorPage = ({ title, message }) => {
  const navigate = useNavigate();

  const handleBackToSafety = () => {
    navigate("/");
  };

  const pageNotFoundMessage =
    "Oops, it seems like the page you are looking for doesn't exist.";

  return (
    <main className="error-page">
      <Lottie
        className="error-page__image"
        animationData={pageNotFoundLottie}
        loop={true}
      />
      <SectionHeader title={title || "Page not found"} />
      <p>{message || pageNotFoundMessage}</p>
      <button className="error-page__button" onClick={handleBackToSafety}>
        Go back to safety
      </button>
    </main>
  );
};

export default ErrorPage;
