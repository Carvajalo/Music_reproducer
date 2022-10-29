import React, { createContext, useContext, useEffect, useState } from "react";

export const PaginationContext = createContext();

export function PaginationContextProvider(props) {
  const samplesPerPage = 8;
  const [page, setPage] = useState(1);
  const [arrayPages, setArrayPages] = useState([]);
  const pageVisited = (page - 1) * samplesPerPage;
  const [isChange, setIsChange] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    return setLastPage(arrayPages.length);
  }, [arrayPages]);

  

  return (
    <PaginationContext.Provider
      value={{
        isChange,
        setIsChange,
        page,
        pageVisited,
        samplesPerPage,
        setPage,
        arrayPages,
        setArrayPages,
        lastPage,

      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
}
