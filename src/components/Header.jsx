import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Header = ({ isMobileNavOpened, setIsMobileNavOpened }) => {
  const onHandlerMobileNavOpened = () => {
    setIsMobileNavOpened(!isMobileNavOpened);
  };

  return (
    <header className="main-header-container">
      <div className="main-header">
        <h1 className="main-header__logo">
          <Link to="/">NC BoardGames</Link>
        </h1>
        <NavigationBar
          isMobileNavOpened={isMobileNavOpened}
          setIsMobileNavOpened={setIsMobileNavOpened}
        />
        <div className="clear-flex-1" />
        <button
          className="mobile-nav__btn"
          onClick={onHandlerMobileNavOpened}
          aria-label="open navigation menu"
        >
          {!isMobileNavOpened ? (
            <IoMenu className="icon--medium" />
          ) : (
            <IoClose className="icon--medium" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
