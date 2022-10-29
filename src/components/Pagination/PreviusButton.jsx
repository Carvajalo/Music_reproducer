import React from "react";

export function PreviusButton({ name, page, setPage }) {
  const style =
    "py-2 px-3 leading-tight border bg-gray-800 border-gray-700 hover:bg-gray-700 w-20  focus:ring-4 focus:outline-none focus:ring-gray-900  text-sm  text-center border-b font-medium whitespace-nowrap text-white ";

  function pageHandler() {
    if (name === "Previous") {
      return setPage(page - 1);
    }
    if (name === "Next") {
      return setPage(page + 1);
    }
  }

  return (
    <div
      onClick={pageHandler}
      className={
        name === "Previous"
          ? style + "rounded-l-lg"
          : name == "Next"
          ? style + " rounded-r-lg"
          : style
      }
    >
      {name}
    </div>
  );
}
