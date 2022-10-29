import React, { useEffect } from "react";
import { useContext } from "react";
import { PaginationContext } from "../../context/PaginationContext";
import { PaginationButtons } from "./PaginationButtons";
import { PreviusButton } from "./PreviusButton";

export const Pagination = () => {
  const { setPage, page, arrayPages, lastPage } = useContext(PaginationContext);


  return (
    <section className="flex justify-center mt-8">
      <div className="inline-flex">
        {page !== 1 && (
          <PreviusButton
            page={page}
            name={"Previous"}
            setPage={setPage}
            lastPage={lastPage}
          ></PreviusButton>
        )}
        <div id="pagination" className="flex ">
          {arrayPages.map((page, index) => (
            <PaginationButtons
              key={index}
              pageItem={page}
              setPage={setPage}
            ></PaginationButtons>
          ))}
        </div>
        {page !== lastPage && (
          <PreviusButton
            page={page}
            name={"Next"}
            setPage={setPage}
            arrayPages={arrayPages}
            lastPage={lastPage}
          ></PreviusButton>
        )}
      </div>
    </section>
  );
};
