import React from "react";

export function PreviusButton({ name, page, setPage }) {
  const prevStyle =
    "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-l-lg";
  const nextStyle =
    "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-r-lg";

  function pageHandler() {
    if (name === "Previous") {
      return setPage(page - 1);
    } else {
      console.log("nextHandler");
      return setPage(page + 1);
    }
  }

  return (
    <div
      onClick={pageHandler}
      id="icon_arrow_left"
      className={name === "Previous" ? prevStyle : nextStyle}
    >
      {name}
    </div>
  );
}
