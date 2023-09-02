import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ active, count, pageSize }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;
  return (
    <div className="mb-[20px] flex w-full items-center justify-end text-primary">
      <div className="flex gap-[20px]">
        <div
          onClick={previousPage}
          className={`flex h-[30px] w-[30px]  items-center justify-center rounded-full bg-gray ${
            currentPage === 1 ? "" : "cursor-pointer hover:bg-lightGray"
          } `}
        >
          <button
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? "" : "hover:text-secondary"} `}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <div
          onClick={nextPage}
          className={`flex h-[30px] w-[30px]   items-center justify-center rounded-full bg-gray ${
            currentPage === pageCount ? "" : "cursor-pointer hover:bg-lightGray"
          } `}
        >
          <button
            disabled={currentPage === pageCount}
            className={`${
              currentPage === pageCount ? "" : "hover:text-secondary"
            } `}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
