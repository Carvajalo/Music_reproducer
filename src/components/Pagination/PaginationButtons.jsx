import React, { useContext, useEffect } from "react";

export const PaginationButtons = ({ page, setPage, lastPage }) => {
  useEffect(() => {
    console.log("actual page is: ", page);
    console.log("lastPage: ", lastPage);
  }, [page]);

  const style =
    "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  const lastPageStyle =
    "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-r-lg";
  

  const firstPage = "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-l-lg" 

  function setPageHandler() {
    setPage(page - 1);
  }
  return (
    <>
      <div
        onClick={setPageHandler}
        className={style}
      >
        {page}
      </div>
    </>
  );
};
