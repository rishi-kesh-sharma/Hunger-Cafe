"use client";

import React from "react";
import Button from "./Button";

const ToggleButton = ({ handleToggle }) => {
  return (
    <Button
      className="bg-[#086BFE] text-gray-300 px-3 py-1 rounded-md text-[1rem]"
      onClick={handleToggle}>
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"></path>
      </svg>
    </Button>
  );
};

export default ToggleButton;
