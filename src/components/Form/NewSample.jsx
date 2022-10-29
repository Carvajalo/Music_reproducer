import React, { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";
import { PaginationContext } from "../../context/PaginationContext";

export const NewSample = ({ displayForm, setDisplayForm }) => {
  const { addSamples } = useContext(MusicContext);

  function setSampleInfo(sample) {
    let samp = {};
    let audio = new Audio(sample.audio);
    audio.onloadeddata = () => {
      samp = {
        ...sample,
        duration: [
          Math.floor(audio.duration / 60),
          Math.ceil(audio.duration % 60),
        ],
      };
      addSamples(samp);
    };
  }

  function validateAudioReges(src) {
    /* /\.(?:wav|mp3)$/i */
    var regex = /\.(?:wav|mp3)$/;
    if (src.length > 0) {
      if (regex.test(src)) {
        return true;
      } else {
        return false;
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let fReader = new FileReader();
    const audio = e.target.sample.files[0];
    if (audio == null) {
      return alert("audio is null");
    }
    /*     if (!validateAudioReges(e.target.sample.files[0])) {
      console.log("Archivo no válido");
    } */
    fReader.readAsDataURL(audio);
    fReader.onloadend = function (event) {
      const samp = {
        audio: event.target.result,
        title: e.target.title.value,
        artist: e.target.artist.value,
        album: e.target.album.value,
      };
      setSampleInfo(samp);
    };
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="flex justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-8 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow bg-gray-700">
            <button
              onClick={() => setDisplayForm(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <div className="py-6 px-6 ">
              <h3 className="mb-4 text-lg font-medium  text-white">
                Add New Sample
              </h3>

              <form
                onSubmit={onSubmit}
                id="form_crear"
                className="space-y-4 py-4"
              >
                <label
                  htmlFor="sample"
                  className="block mb-6 text-sm font-medium text-gray-300"
                >
                  <div className="flex content-center justify-between	">
                    <label htmlFor="sample" className="self-center">
                      Select Sample:
                    </label>
                    <input
                      type="file"
                      id="sample"
                      name="sample"
                      accept="audio/*"
                      placeholder="sample"
                      className="file:w-24 file:h-10 file:rounded-lg file:text-sm file:font-semibold file:hover:bg-blue-600 file:text-gray-300 file:bg-blue-500 hover:file:bg-blue-600 hover:file:text-white file:border-collapse file:focus:ring-blue-500 filefocus:outline-none file:focus:ring-4 file:ring-blue-300 file:border-b file:border-gray-700
                      font-medium whitespace-nowrap
                      "
                    />
                  </div>
                </label>

                <label
                  htmlFor="title"
                  className="block  text-sm font-medium  text-gray-300"
                >
                  <span>Title:</span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="title"
                    className=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600  placeholder-gray-400 text-white"
                    required
                  />
                </label>
                <label
                  htmlFor="artist"
                  className="block  text-sm font-medium text-gray-900 text-gray-300"
                >
                  <span>Author:</span>
                  <input
                    type="artist"
                    name="artist"
                    id="artist"
                    placeholder="artist"
                    className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white"
                    required
                  />
                </label>
                <label
                  htmlFor="album"
                  className="block  text-sm font-medium  text-gray-300"
                >
                  <span>Album:</span>
                  <input
                    type="text"
                    name="album"
                    id="album"
                    placeholder="album"
                    className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600  placeholder-gray-400 text-white"
                    required
                  />
                </label>
                <div className="">
                  <button
                    type="submit"
                    id="send_sample"
                    className="w-20 text-white bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-900  rounded-lg text-sm py-3 text-center border-b border-gray-700 hover:bg-blue-600   mr-2 font-medium whitespace-nowrap "
                  >
                    Submit
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setDisplayForm(false);
                    }}
                    type="submit"
                    id="cancelar_sample"
                    className="w-20 text-white bg-blue-500 focus:ring-4 focus:outline-none focus:ring-gray-900  rounded-lg text-sm py-3 text-center border-b border-gray-700 hover:bg-blue-600   mr-2 font-medium whitespace-nowrap "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
