import React from "react";
import PlayBtn from "./PlayBtn";

const MusicTemplate = ({
  sample: { id, audio, title, artist, album, duration },
}) => {
  return (
    <tr className="max-sm:w-full">
      <td className="flex justify-center py-1">
        <PlayBtn audio={audio} id={id}></PlayBtn>
      </td>
      <td className="break-all max-sm:mx-1">{title}</td>
      <td className="break-all max-sm:mx-1">{artist}</td>
      <td className="break-all max-sm:mx-1">{album}</td>
      <td className="break-all max-sm:mx-1 max-sm:hidden">{`${duration[0]}:${duration[1]}`}</td>
    </tr>
  );
};

export default MusicTemplate;
