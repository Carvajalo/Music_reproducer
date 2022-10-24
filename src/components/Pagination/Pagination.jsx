import React, { useEffect } from "react";
import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";
import { PaginationContext } from "../../context/PaginationContext";
import { PaginationButtons } from "./PaginationButtons";
import { PreviusButton } from "./PreviusButton";

export const Pagination = () => {
  const { setPage, page, arrayPages, lastPage } = useContext(PaginationContext);

  return (
    <section className="flex justify-around mt-8">
      <div className="inline-flex -space-x-px">
        {page !== 0 && (
          <PreviusButton
            page={page}
            name={"Previous"}
            setPage={setPage}
            lastPage={lastPage}
          ></PreviusButton>
        )}

        <div id="pagination" className="flex"></div>
        {arrayPages.map((page, index) => (
          <PaginationButtons
            key={index}
            page={page}
            setPage={setPage}
          ></PaginationButtons>
        ))}
        {page !== lastPage - 1 && (
          <PreviusButton 
            page={page}
            name={"Next"}
            setPage={setPage}
            arrayPages={arrayPages}
          ></PreviusButton>
        )}
      </div>
    </section>
  );
};
