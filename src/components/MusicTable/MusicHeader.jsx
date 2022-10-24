import React from "react";

const MusicHeader = () => {
  return (
    <>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <span className="ml-2"></span>
            </div>
          </th>
          <th scope="col" className="py-3 px-6">
            Title
          </th>
          <th scope="col" className="py-3 px-6">
            Artist
          </th>
          <th scope="col" className="py-3 px-6">
            Album
          </th>

          <th scope="col" className="py-3 px-6">
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
