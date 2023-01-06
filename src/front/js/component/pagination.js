import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, pages, element }) => {
  function generatePages() {}

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center pagination-style ">
        <li className= {` page-item ${currentPage == 1 ? "disabled" : ""}` }>
          <Link
            className="page-link"
            to={`/${element}?page=${Number(currentPage) - 1}`}
          >
            Previous
          </Link>
        </li>
        {Array(pages)
          .fill("")
          .map((el, i) => {
            let page = i + 1;
            return (
              <li
                key={page}
                className={`page-item ${page == currentPage ? "active" : ""}`}
              >
                <Link className="page-link" to={`/${element}?page=${page}`}>
                  {page}
                </Link>
              </li>
            );
          })}
        <li className={`page-item ${pages == currentPage ? "disabled" : ""}`}>
          <Link
            className="page-link "
            to={`/${element}?page=${Number(currentPage) + 1}`}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
