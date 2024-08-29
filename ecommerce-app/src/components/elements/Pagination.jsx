/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const Pagination = ({ page, totalPages, setPage }) => {
  const { pathname } = useLocation();

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="join">
      <Link
        to={`${pathname}?page=${page - 1}`}
        onClick={() => handlePageChange(page - 1)}
        className={`join-item btn ${page === 1 ? "pointer-events-none opacity-50" : ""}`}
        disabled={page === 1}
      >
        «
      </Link>
      <button className="join-item btn">
        Page {page} of {totalPages}
      </button>
      <Link
        to={`${pathname}?page=${page + 1}`}
        onClick={() => handlePageChange(page + 1)}
        className={`join-item btn ${page === totalPages ? "pointer-events-none opacity-50" : ""}`}
        disabled={page === totalPages}
      >
        »
      </Link>
    </div>
  );
};

export default Pagination;
