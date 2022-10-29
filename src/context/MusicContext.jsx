import React, { createContext, useEffect, useRef, useState } from "react";
import { samples_testing } from "../data/data";

export const MusicContext = createContext();

export function MusicContextProvider(props) {
  const [samples, setSamples] = useState(samples_testing);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentSample, setCurrentSample] = useState();

  /* Barra de búsqueda:  */

  const [displaySamples, setDisplaySamples] = useState(samples_testing);
  const [busqueda, setBusqueda] = useState("");

  function addSamples({ audio, title, artist, album, duration }) {
    const newSample = {
      id: samples.length + 1,
      audio,
      title,
      artist,
      album,
      duration,
    };
    setSamples([...samples, newSample]);
    setDisplaySamples([...displaySamples, newSample]) 
  }

  function filtrar(busqueda) {
    var resultadoBusqueda = samples.filter((sample) => {
      if (
        sample.title
          .toString()
          .toLocaleLowerCase()
          .includes(busqueda.toLocaleLowerCase()) ||
        sample.artist
          .toString()
          .toLocaleLowerCase()
          .includes(busqueda.toLocaleLowerCase()) ||
        sample.album
          .toString()
          .toLocaleLowerCase()
          .includes(busqueda.toLocaleLowerCase())
      ) {
        return sample;
      }
    });
    setDisplaySamples(resultadoBusqueda);
  }

  return (
    <MusicContext.Provider
      value={{
        samples,
        addSamples,
        isAudioPlaying,
        setIsAudioPlaying,
        currentSample,
        setCurrentSample,
        busqueda,
        setBusqueda,
        displaySamples,
        setDisplaySamples,
        filtrar,
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
}
