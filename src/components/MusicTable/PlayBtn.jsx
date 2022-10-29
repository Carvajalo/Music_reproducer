import React, { useContext } from "react";
import { MusicContext } from "../../context/MusicContext";
import { pauseButton, playButton } from "../../assets/images/btns";

const PlayBtn = (props) => {
  const { audio, id } = props;
  const sample = new Audio(audio);
  const { isAudioPlaying, setIsAudioPlaying, currentSample, setCurrentSample } =
    useContext(MusicContext);

  const playPause = () => {
    if (!isAudioPlaying) {
      sample.play()
      setCurrentSample([sample, id]);
      setIsAudioPlaying(true);
    } else {
      if (id === currentSample[1]) {
        setCurrentSample([])
        setIsAudioPlaying(false)
        return currentSample[0].pause()
      }else{
        sample.currentTime = 0;
        currentSample[0].pause()
        setCurrentSample([sample, id]);
        return sample.play()
      }
    }
  };

  return (
    <button
      onClick={playPause}
      className="relative inline-flex items-center px-2 py-1 border text-sm font-medium rounded-lg bg-gray-800 leading-tight border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
    >
      {!isAudioPlaying ? playButton : id === currentSample[1] ? pauseButton : playButton }
    </button>
  );
};

export default PlayBtn;
