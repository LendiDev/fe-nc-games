import { sortByData } from "../data/sortByData";

const ReviewsFilter = ({ searchParams, setSearchParams }) => {
  const order = searchParams.get("order");

  const handleChangeSortBy = (e) => {
    const sortByValue = e.target.value;
    setSearchParams((params) => ({
      ...Object.fromEntries(params),
      sort_by: sortByValue,
    }));
  };

  const handleToggleOrderBy = () => {
    const newOrder = order === "ASC" ? "DESC" : "ASC";
    setSearchParams((params) => ({
      ...Object.fromEntries(params),
      order: newOrder,
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
      >
        {sortByData.map(({ title, value }) => (
          <option key={title} value={value}>
            {title}
          </option>
        ))}
      </select>
      <button
        className={`reviews-filter__button`}
        onClick={handleToggleOrderBy}
      >
        {order === "ASC" ? "DESC" : "ASC"}
      </button>
    </section>
  );
};

export default ReviewsFilter;
