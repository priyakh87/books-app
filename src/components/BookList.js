import React from 'react';
import { Link } from 'react-router-dom';
import BookShow from "./BookShow";
import "../css/bookList.css";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();

  return (
    <div className="book-list container">
      {books.map((book) => (
        <div key={book.id}>
          {/* Link to book details */}
          <Link to={`/books/${book.id}`}>
            <BookShow book={book} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookList;