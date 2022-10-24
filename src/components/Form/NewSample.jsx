import React, { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";
import { PaginationContext } from "../../context/PaginationContext";

export const NewSample = () => {
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
    if (!validateAudioReges(e.target.sample.files[0])) {
      console.log("Archivo no válido");
    }
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
    <section className="flex justify-around bg-gray-50 dark:bg-gray-300 text-stale-700">
      <form onSubmit={onSubmit} id="form_crear" className="mx-500 py-4">
        <label htmlFor="sample" className="mr-10">
          <label htmlFor="sample">Select Sample:</label>
          <input
            type="file"
            id="sample"
            name="sample"
            accept="audio/*"
            placeholder="sample"
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-1 file:text-sm file:font-semibold file:bg-gray-50 file:dark:text-white file text-gray-900  file:dark:hover:bg-gray-600 file:text-gray-900 file:dark:bg-gray-800 hover:file:bg-gray-600 hover:file:text-white"
          />
        </label>
        <label htmlFor="title" className="mr-10">
          <span>Title: </span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            className="text-slate-500 ml-2 py-1 px-1 hover:bg-gray-100 rounded-lg"
            required
          />
        </label>
        <label htmlFor="artist" className="mr-10">
          <span>Author: </span>
          <input
            type="artist"
            name="artist"
            id="artist"
            placeholder="artist"
            className="text-slate-500 ml-2 py-1 px-1 hover:bg-gray-200 rounded-lg"
            required
          />
        </label>
        <label htmlFor="album" className="mr-10">
          <span>album: </span>
          <input
            type="text"
            name="album"
            id="album"
            placeholder="album"
            className="text-slate-500 ml-2 py-1 px-1 hover:bg-gray-200 rounded-lg"
            required
          />
        </label>
        <div className="py-3 px-6">
          <button
            type="submit"
            id="send_sample"
            className="send_sample bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg px-5 py-1 mr-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Submit
          </button>
          <button
            type="submit"
            id="cancelar_sample"
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg px-5 py-1 mr-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};
