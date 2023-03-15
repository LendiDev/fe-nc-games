import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/api";
import { dashCaseToHumanReadableString } from "../utils/dashCaseToHumanReadableString";

const CategoriesNav = ({category}) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <nav className="categories">
        {isLoading && <p className="categories--loading">Loading categories...</p>}
        <ul className="categories__list" aria-label="Categories">
          {categories.map(({ slug }) => (
            <li key={slug}>
              <Link className={`categories__link${category === slug ? '--current' : ''}`} to={`/reviews/${slug}`}>
                {dashCaseToHumanReadableString(slug)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default CategoriesNav;
