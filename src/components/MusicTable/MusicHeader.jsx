import React from "react";

const MusicHeader = () => {
  return (
    <>
      <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
        <tr>
          <th className="p-4">
            <span className="sr-only">Play button</span>
          </th>
          <th className="py-4">
            Title
          </th>
          <th className="py-4">
            Artist
          </th>
          <th className="py-4">
            Album
          </th>
          <th className="py-4">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="currentcolor"
            >
              <title>clock</title>
              <path d="M20.586 23.414l-6.586-6.586v-8.828h4v7.172l5.414 5.414zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12z"></path>
            </svg>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default MusicHeader;
