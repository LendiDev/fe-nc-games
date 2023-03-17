import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CategoriesContext } from "../contexts/Categories.context";
import { fetchCategories } from "../utils/api";
import { dashCaseToHumanReadableString } from "../utils/dashCaseToHumanReadableString";
import LoadingSpinner from "./LoadingSpinner";

const CategoriesNav = ({ category, searchParams = "" }) => {
  const { categories, setCategories } = useContext(CategoriesContext);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch(() => {
        setError("Couldn't fetch categories");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setCategories]);

  return (
    <section>
      <nav className="categories">
        {error && !categories && <p className="categories--error">{error}</p>}
        {isLoading && !categories && <LoadingSpinner what="categories" flexLoading />}
        {categories && (
          <ul className="categories__list" aria-label="Categories">
            <li>
              <Link
                className={`categories__link${
                  !category && pathname !== "/" ? "--current" : ""
                }`}
                to={`/reviews?${searchParams}`}
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
