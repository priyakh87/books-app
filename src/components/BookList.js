import React from 'react';
import BookShow from "./BookShow";
import "../css/bookList.css";
import useBooksContext from "../hooks/use-books-context";



function BookList() {
  const { books } = useBooksContext();
  
  return (
    <div className='container mt-5 mb-5 main-page'>    
    <div className="book-list ">
      {books.map((book) => (
        <div key={book.id}>
            <BookShow book={book} />
          
        </div>
      ))}
      </div>
    </div>
  );
}

export default BookList;