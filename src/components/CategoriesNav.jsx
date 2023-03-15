import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchCategories } from "../utils/api";
import { dashCaseToHumanReadableString } from "../utils/dashCaseToHumanReadableString";

const CategoriesNav = ({ category, searchParams }) => {
  const [categories, setCategories] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch(() => {
        setError("Something went wrong... Couldn't fetch categories");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <nav className="categories">
        {error && <p className="categories--loading">{error}</p>}
        {isLoading && (
          <p className="categories--loading">Loading categories...</p>
        )}
        {categories && (
          <ul className="categories__list" aria-label="Categories">
            <li>
              <Link
                className={`categories__link${
                  !category && pathname !== "/" ? "--current" : ""
                }`}
                to={`/reviews`}
              >
                All
              </Link>
            </li>
            {categories.map(({ slug }) => (
              <li key={slug}>
                <Link
                  className={`categories__link${
                    category === slug ? "--current" : ""
                  }`}
                  to={`/reviews/${slug}?${searchParams}`}
                >
                  {dashCaseToHumanReadableString(slug)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </section>
  );
};

export default CategoriesNav;
