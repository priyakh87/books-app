import React from 'react';
import BookShow from "./BookShow"
import "../css/bookList.css";
import useBooksContext from "../hooks/use-books-context";

function BookList(){

    const {books}=useBooksContext();

    return <div className="book-list container">
        {books.map((book,index)=>{
         return   <BookShow key={index} book={book}  />
        })}
    </div>
}

export default BookList