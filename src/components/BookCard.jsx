import React from "react";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="border p-3 rounded-md shadow-md w-48 flex flex-col items-center">
      <img src={coverUrl} alt={book.title} className="h-56 mb-2 object-cover" />
      <h3 className="font-semibold text-center">{book.title}</h3>
      <p className="text-sm text-gray-600 text-center">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p className="text-xs text-gray-500">{book.first_publish_year || "Year Unknown"}</p>
    </div>
  );
};

export default BookCard;
