import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search books by title, author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 w-80 border rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
