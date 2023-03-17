import { errors } from "../data/errors";
import pageNotFoundLottie from "../assets/lottie/404.json";
import badRequestLottie from "../assets/lottie/400.json";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import SectionHeader from "../components/SectionHeader";
import useTitle from "../hooks/useTitle";

const ErrorPage = ({ statusCode, header, message }) => {
  useTitle(`${statusCode} - ${header}`)
  const navigate = useNavigate();

  const handleBackToSafety = () => {
    navigate("/");
  };

  let errorImage = pageNotFoundLottie;
  if (statusCode === 400) {
    errorImage = badRequestLottie;
  }

  return (
    <main className="error-page">
      <Lottie
        className="error-page__image"
        animationData={errorImage}
        loop={true}
      />
      <SectionHeader title={header || errors.default.notFound.header} />
      <p>{message || errors.default.notFound.message}</p>
      <button className="error-page__button" onClick={handleBackToSafety}>
        Go back to safety
      </button>
    </main>
  );
};

export default ErrorPage;
