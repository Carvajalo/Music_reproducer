import React, { useContext, useEffect } from "react";
import { PaginationContext } from "../../context/PaginationContext";

export const PaginationButtons = ({ pageItem, setPage }) => {
  const { lastPage, page } = useContext(PaginationContext);

  let style =
    "py-2 px-4 ml-0 leading-tight hover:text-white text-gray-400 hover:text-white";

  function setPageHandler() {
    setPage(pageItem);
  }

  function calculateColors(page, pageItem) {
    if (page != pageItem) {
      return style + " bg-gray-800 text-gray-500";
    }
    style += " bg-blue-600 font-medium text-white";
    if (pageItem == 1) {
      return style + " rounded-l-lg";
    }
    if (pageItem == lastPage) {
      return style + " rounded-r-lg";
    }
    return style;
  }

  return (
    <>
      <div onClick={setPageHandler} className={calculateColors(page, pageItem)}>
        {pageItem}
      </div>
      
    </>
  );
};
