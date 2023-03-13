import NavigationBar from "./NavigationBar";

const Header = ({ isMobileNavOpened, setIsMobileNavOpened }) => {
  const onHandlerMobileNavOpened = () => {
    setIsMobileNavOpened(!isMobileNavOpened);
  };

  return (
    <header className="main-header">
      <h1 className="main-header__logo">NC BoardGames</h1>
      <NavigationBar
        isMobileNavOpened={isMobileNavOpened}
        setIsMobileNavOpened={setIsMobileNavOpened}
      />
      <button className="mobile-nav__btn" onClick={onHandlerMobileNavOpened}>
        {!isMobileNavOpened ? (
          <>
            <span />
            <span />
            <span />
          </>
        ) : (
          <p className="mobile-nav__btn__close">X</p>
        )}
      </button>
    </header>
  );
};

export default Header;
