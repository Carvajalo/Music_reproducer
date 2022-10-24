import React, { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";

const PlayBtn = (props) => {
  const { audio } = props;
  const { audioPlaying, setAudioPlaying } = useContext(MusicContext);

  function playAudio(audio) {
    let playAudio = new Audio(audio);

    if (!audioPlaying) {
      setAudioPlaying(audio);
      playAudio.play();
    } else {
      if (playAudio === audioPlaying) {
        console.log("a");
        audioPlaying.pause();
        setAudioPlaying(null);
      } else {
        playAudio.currentTime = 0;
        audioPlaying.pause();
        setAudioPlaying(audio);
        playAudio.play();
      }
    }
  }

  return (
    <button
      onClick={() => playAudio(audio)}
      className="relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-lg bg-gray-800 leading-tight border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
    >
      <span className="sr-only">Play</span>
      <span className="sr-only">Play</span>
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5 3a1 1 0 00-1 1v12a1 1 0 001.555.832l9-6a1 1 0 000-1.664l-9-6A1 1 0 005 3z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default PlayBtn;
