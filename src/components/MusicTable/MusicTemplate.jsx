import React from "react";
import PlayBtn from "./PlayBtn";

const MusicTemplate = ({ sample: { id, audio, title, artist, album, duration } }) => {
  return (
    <tr className="">
      <td className="flex justify-center py-1">
        <PlayBtn audio={audio} id={id}></PlayBtn>
      </td>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{album}</td>
      <td className="">{`${duration[0]}:${duration[1]}`}</td>
    </tr>
  );
};

export default MusicTemplate;
