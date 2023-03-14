import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavigationBar = ({ isMobileNavOpened, setIsMobileNavOpened }) => {
  useEffect(() => {
    document.body.style.overflow = isMobileNavOpened ? "hidden" : "auto";
  }, [isMobileNavOpened]);

  const handleClick = () => {
    setIsMobileNavOpened(false);
  };

  return (
    <nav
      className={`main-header__nav ${isMobileNavOpened ? "opened-mobile" : ""}`}
      onClick={handleClick}
    >
      <ul className="main-header__links">
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/reviews" onClick={handleClick}>
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
