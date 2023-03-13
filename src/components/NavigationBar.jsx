import { Link } from "react-router-dom";

const NavigationBar = ({ isMobileNavOpened, setIsMobileNavOpened }) => {
  const handleClickOnLink = () => {
    setIsMobileNavOpened(false);
  };

  return (
    <nav className={`main-header__nav ${isMobileNavOpened ? "opened" : ""}`}>
      <ul className="main-header__links">
        <li>
          <Link to="/" onClick={handleClickOnLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/reviews" onClick={handleClickOnLink}>
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
