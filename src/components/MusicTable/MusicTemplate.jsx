import React from "react";
import PlayBtn from "./PlayBtn";

const MusicTemplate = ({ sample: { audio, title, artist, album, duration } }) => {
  return (
    <tr>
      <td>
        <PlayBtn audio={audio}></PlayBtn>
      </td>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{album}</td>
      <td>{`${duration[0]}:${duration[1]}`}</td>
    </tr>
  );
};

export default MusicTemplate;
