import React, { createContext, useEffect, useState } from "react";
import { samples_testing } from "../data/data";

export const MusicContext = createContext();

export function MusicContextProvider(props) {
  const [samples, setSamples] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState();

  useEffect(() => {
    setSamples(samples_testing);
  }, []);

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
        audioPlaying,
        setAudioPlaying,
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
}
