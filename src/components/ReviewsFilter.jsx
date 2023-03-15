import { sortByData } from "../data/sortByData";

const ReviewsFilter = ({ searchParams, setSearchParams }) => {
  const order = searchParams.get("order");
  const sortBy = searchParams.get("sort_by")
    ? searchParams.get("sort_by")
    : "created_at";

  const orderButtonValue = order === "ASC" ? "ASC" : "DESC";
  const toggledOrder = order !== "ASC" ? "ASC" : "DESC";

  const handleChangeSortBy = (e) => {
    const sortByValue = e.target.value;
    setSearchParams((params) => ({
      ...Object.fromEntries(params),
      sort_by: sortByValue,
    }));
  };

  const handleToggleOrderBy = () => {
    setSearchParams((params) => ({
      ...Object.fromEntries(params),
      order: toggledOrder,
    }));
  };

  return (
    <section className="reviews-filter">
      <div className="reviews-filter__label">
        <label htmlFor="sort_by">Sort by: </label>
      </div>
      <select
        className="reviews-filter__select"
        id="sort_by"
        onChange={handleChangeSortBy}
        defaultValue={sortBy}
      >
        {sortByData.map(({ label, value }) => (
          <option key={label} value={value} >
            {label}
          </option>
        ))}
      </select>
      <button
        className={`reviews-filter__button`}
        onClick={handleToggleOrderBy}
        aria-label={`Order by ${orderButtonValue}. Switch to ${toggledOrder}`}
      >
        {orderButtonValue}
      </button>
    </section>
  );
};

export default ReviewsFilter;
