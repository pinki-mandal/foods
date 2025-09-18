import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books) return null;

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {books.length === 0 ? (
        <p className="text-gray-500 mt-4">No books found. Try another search!</p>
      ) : (
        books.map((book) => <BookCard key={book.key} book={book} />)
      )}
    </div>
  );
};

export default BookList;
