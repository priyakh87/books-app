import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useBooksContext from '../hooks/use-books-context';

function BookDetail() {
    const {getBookById}=useBooksContext();
  const { id } = useParams();  // Get the book ID from the URL
  const [book, setBook] = useState(null);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const fetchBook = await getBookById(id);
        setBook(fetchBook);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBook();
  }, [id,getBookById]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      {/* Add any additional book details you need */}
    </div>
  );
}

export default BookDetail;