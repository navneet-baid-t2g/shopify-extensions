// components/SearchBar.js
"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div className="flex-shrink-0 w-40 flex justify-center">
      {/* Search Button */}
      <button
        onClick={toggleSearchBar}
        className="text-gray-700 hover:text-primary"
      >
        <FiSearch size={24} />
      </button>

      {/* Search Input */}
      {isSearchActive && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 p-4 shadow-lg flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none text-gray-700 placeholder-gray-400 m-auto"
          />
        </div>
      )}
    </div>
  );
}
