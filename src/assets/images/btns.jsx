export const playButton = (
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
);

export const pauseButton = (
  <svg
    version="1.1"
    className="h-5 w-5 pt-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="10 5 15 28"
    fill="currentColor"
    aria-hidden="true"
  >
    <title>pause2</title>
    <path
      fillRule="evenodd"
      d="M4 4h10v24h-10zM18 4h10v24h-10z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const nextButton = (
  <div className="py-2 px-3 leading-tight border bg-gray-800 border-gray-700 hover:bg-gray-700 w-20  focus:ring-4 focus:outline-none focus:ring-gray-900  text-sm  text-center border-b font-medium whitespace-nowrap text-white rounded-l-lg">
    {"Next"}
  </div>
);

export const prevButton = (
  <div className="py-2 px-3 leading-tight border bg-gray-800 border-gray-700 hover:bg-gray-700 w-20  focus:ring-4 focus:outline-none focus:ring-gray-900  text-sm  text-center border-b font-medium whitespace-nowrap text-white rounded-l-lg">
    {"Previous"}
  </div>
);
