import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useIsMobile } from "../hooks/useIsMobile";

const NavigationBar = ({ isMobileNavOpened, setIsMobileNavOpened }) => {
  const [currentPage, setCurrentPage] = useState("");

  const { user, logout } = useAuth();
  const isMobile = useIsMobile();
  const location = useLocation();

  const getCurrentPage = ({ pathname }) => {
    // pathname match for "/" endpoint
    if (/^\/$/.test(pathname)) {
      return "home";
    }
    // pathname match for "/reviews/..." endpoint
    if (/^\/reviews/.test(pathname)) {
      return "reviews";
    }
  };

  useEffect(() => {
    setCurrentPage(getCurrentPage(location));
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileNavOpened ? "hidden" : "auto";
  }, [isMobileNavOpened]);

  const handleClick = () => {
    setIsMobileNavOpened(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav
      className={`main-header__nav ${isMobileNavOpened ? "opened-mobile" : ""}`}
      onClick={handleClick}
    >
      <ul className="main-header__links">
        <li>
          <Link
            className={
              currentPage === "home" ? "main-header__links--current" : ""
            }
            to="/"
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              currentPage === "reviews" ? "main-header__links--current" : ""
            }
            to="/reviews"
            onClick={handleClick}
          >
            Reviews
          </Link>
        </li>
        {user && isMobile && (
          <li>
            <button className="logout__button" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
