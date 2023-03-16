const LoadingSpinner = ({
  size,
  borderWidth,
  fullscreen,
  flexLoading,
  what = "",
  topOffset,
}) => (
  <div
    className={`${fullscreen ? "loading-fullscreen" : ""} ${
      flexLoading ? "loading-flex" : ""
    }`}
    style={{ marginTop: topOffset }}
    aria-label={`Loading ${what}`}
  >
    <div
      className="loading-spinner"
      style={{
        width: fullscreen ? 50 : size,
        height: fullscreen ? 50 : size,
        borderWidth: fullscreen ? 10 : borderWidth,
      }}
    ></div>
  </div>
);

export default LoadingSpinner;
