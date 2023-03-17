import React from "react";
import { usePagination, DOTS } from "../hooks/usePagination";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
const Pagination = ({
  onPageChange,
  totalPages,
  siblingCount = 5,
  currentPage,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="pagination">
      <li
        className={`pagination__button${currentPage === 1 ? "--hide" : ""}`}
        onClick={onPrevious}
      >
        <GrFormPreviousLink className="icon--sm" />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            onClick={() => onPageChange(pageNumber)}
            className={`${
              pageNumber === currentPage ? "pagination__page--selected" : ""
            }`}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination__button${
          currentPage === lastPage ? "--hide" : ""
        }`}
        onClick={onNext}
      >
        <GrFormNextLink className="icon--sm" />
      </li>
    </ul>
  );
};

export default Pagination;
