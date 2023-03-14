import { useNavigate } from "react-router-dom";
import SectionHeader from "./SectionHeader";

const ErrorSection = ({ showHeader = true, title, message }) => {
  const navigate = useNavigate();

  const handleBackToSafety = () => {
    navigate("/");
  };

  return (
    <section>
      {showHeader && (
        <SectionHeader title={title ? title : "Something went wrong..."} />
      )}
      <p>{message}</p>
      <button onClick={handleBackToSafety}>Go back to safety</button>
    </section>
  );
};

export default ErrorSection;
