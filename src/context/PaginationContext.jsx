import React, { createContext, useContext, useEffect, useState } from "react";

export const PaginationContext = createContext();

export function PaginationContextProvider(props) {
  const samplesPerPage = 8;
  const [page, setPage] = useState(1);
  const [arrayPages, setArrayPages] = useState([]);
  const pageVisited = (page - 1) * samplesPerPage;
  const [isChange, setIsChange] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  /* For search pagination:  */
  const [displayPages, setDisplayPages] = useState([]);

  useEffect(() => {
    setDisplayPages([arrayPages]);
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
        displayPages,
        setDisplayPages,
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
}
