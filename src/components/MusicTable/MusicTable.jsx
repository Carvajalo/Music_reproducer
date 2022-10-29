import React, { useContext, useEffect } from "react";
import { MusicContext } from "../../context/MusicContext";
import { PaginationContext } from "../../context/PaginationContext";
import MusicHeader from "./MusicHeader";
import MusicTemplate from "./MusicTemplate";

const MusicTable = () => {
  const { samples } = useContext(MusicContext);
  const {
    pageVisited,
    samplesPerPage,
    setArrayPages,
    arrayPages,
    isChange,
    setIsChange,
  } = useContext(PaginationContext);

  const new_button = Math.ceil(samples.length / samplesPerPage);

  useEffect(() => {
    setIsChange(
      samples.slice(
        samples.length - (samples.length % samplesPerPage),
        samples.length
      ).length
    );
    if (!arrayPages.length) {
      return setArrayPages(Array.from({ length: new_button }, (_, i) => i + 1));
    }
    if (isChange) {
      return;
    }
    return setArrayPages([...arrayPages, arrayPages.length + 1]);
  }, [samples]);

  const setDiplay = samples.slice(pageVisited, pageVisited + samplesPerPage);

  return (

      <div className="w-full shadow-md pb-2 rounded-b-2xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <MusicHeader></MusicHeader>
          <tbody>
            {setDiplay.map((sample, index) => (
              <MusicTemplate key={index} sample={sample} />
            ))}
          </tbody>
        </table>
        
      </div>
  );
};

export default MusicTable;
