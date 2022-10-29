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
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
}
