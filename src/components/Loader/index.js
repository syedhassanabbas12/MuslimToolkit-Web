import React from "react";

const Loader = ({ isLoading }) => {
  return isLoading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div>
        <svg
          fill="none"
          className="h-16 w-16 animate-spin  text-primary-600"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // clip-rule="evenodd"
            clipRule={"evenodd"}
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            // fill-rule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  ) : null;
};

export default Loader;
