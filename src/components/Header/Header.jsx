import React, { useContext, useEffect, useState } from "react";
import { MusicContext } from "../../context/MusicContext";
import { PaginationContext } from "../../context/PaginationContext";
import { NewSample } from "../Form/NewSample";

export const Header = () => {
  const { busqueda, setBusqueda, filtrar } = useContext(MusicContext);
  const { setPage } = useContext(PaginationContext);
  const [displayForm, setDisplayForm] = useState(false);
  function handleDisplayForm() {
    setDisplayForm(true);
  }

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    setPage(1);
  };

  return (
    <header>
      <nav className="rounded-t-xl border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900 max-sm:rounded-none">
        <div>
          <div className="flex items-center justify-center">
            <svg
              className="mr-2"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="white"
            >
              <title>spotify</title>
              <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"></path>
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              MyMusic
            </span>
          </div>
          <div className="flex justify-between py-2 px-4 mt-4">
            <div className="w-full">
              <label
                htmlFor="search"
                className="text-sm font-medium text-gray-300"
              >
                <input
                  className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12 p-2 bg-gray-600 placeholder-gray-400 text-white"
                  type="search"
                  name="search"
                  id="search"
                  onChange={handleChange}
                  placeholder="Search"
                />
              </label>
            </div>
            <div>
              <button
                onClick={handleDisplayForm}
                id="upload_sample"
                className="border-b bg-gray-800 border-gray-700  hover:bg-gray-600 rounded-lg px-5 py-2 font-medium  whitespace-nowrap text-white"
              >
                Add Sample
              </button>
            </div>
          </div>
        </div>
      </nav>
      {displayForm && (
        <NewSample
          displayForm={displayForm}
          setDisplayForm={setDisplayForm}
        ></NewSample>
      )}
    </header>
  );
};
