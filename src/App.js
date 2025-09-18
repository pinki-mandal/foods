import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const candidateID = "Naukri0925";
  const fetchBooks = async () => {
    if (!query.trim()) {
      setError("Please enter a book name!");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      const booksWithImage = data.docs.filter((book) => book.cover_i);
      if (booksWithImage.length === 0) {
        setError("No books found with images.");
        setBooks([]);
      } else {
        setBooks(booksWithImage.slice(0, 10));
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
    setLoading(false);
  };

  const handleSubmit = () => {
    alert(`Candidate ID: ${candidateID}\nBooks submitted: ${books.length}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Book Finder</h1>

      <div className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter book name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-2 rounded text-black"
        />
        <button
          onClick={fetchBooks}
          className="bg-blue-400 text-black px-4 py-2 rounded font-semibold"
        >
          Search
        </button>
      </div>

      <p className="mt-2 text-gray-300">Candidate ID: {candidateID}</p>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-400">{error}</p>}

      <ul className="mt-6 space-y-4 w-full max-w-md">
        {books.map((book, index) => (
          <li
            key={index}
            className="bg-gray-700 p-4 rounded shadow-md flex items-center gap-4 cursor-pointer"
            onClick={() => setSelectedBook(book)}
          >
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              className="w-16 h-20 object-cover rounded"
            />
            <div>
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-300">
                {book.author_name ? book.author_name.join(", ") : "Unknown"}
              </p>
              <p className="text-xs">
                {book.first_publish_year
                  ? `First published: ${book.first_publish_year}`
                  : ""}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {books.length > 0 && (
        <button
          onClick={handleSubmit}
          className="mt-6 bg-green-500 text-black px-4 py-2 rounded font-semibold"
        >
          Submit Exercise
        </button>
      )}

      {/* Modal for selected book */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-white font-bold text-xl"
              onClick={() => setSelectedBook(null)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
            <p className="mb-1">
              <strong>Author:</strong>{" "}
              {selectedBook.author_name
                ? selectedBook.author_name.join(", ")
                : "Unknown"}
            </p>
            <p className="mb-1">
              <strong>First Published:</strong>{" "}
              {selectedBook.first_publish_year || "N/A"}
            </p>
            <img
              src={`https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-L.jpg`}
              alt={selectedBook.title}
              className="mt-2 w-32 h-44 object-cover rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
