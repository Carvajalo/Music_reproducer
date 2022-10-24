import React from "react";
import { NewSample } from "../Form/NewSample";
import MusicTable from "../MusicTable/MusicTable";

export const MusicLayout = () => {
  return (
    <main>
      <NewSample></NewSample>
      <MusicTable></MusicTable>
    </main>
  );
};
