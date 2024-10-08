import React, { createContext, useCallback, useState, useMemo } from "react";
import axios from 'axios';

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    try {
      console.log(process.env.REACT_APP_API_BASE_URL)
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/books`);
      setBooks(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }, []);

  const createBook =useCallback(async (title, author) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/books`, {
        title,
        author,
      });
      const updatedBooks = [...books, response.data];
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  },[books]);

  const deleteById = useCallback(async (id) => {
    try {
      // Delete book via API
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/books/${id}`);
      
      // Update state by filtering out the deleted book
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  
      console.log(`Book with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting book:', error);
      // Optionally: Implement some error notification for users
    }
  }, []);

  const EditById =useCallback(async (id, newTitle, newAuthor) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/books/${id}`, {
        title: newTitle,
        author: newAuthor,
      });

      const updatedBookAfterEdit = books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      });
      setBooks(updatedBookAfterEdit);
    } catch (error) {
      console.error('Error editing book:', error);
    }
  },[books]);

  const getBookById =useCallback(async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/books/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error editing book:', error);
    }
  },[]);


  const ContextValue = useMemo(
    () => ({
      books,
      createBook,
      deleteById,
      EditById,getBookById,
      fetchBooks,
    }),
    [books, createBook, deleteById, EditById, fetchBooks,getBookById]
  );

  return (
    <BookContext.Provider value={ContextValue}>
      {children}
    </BookContext.Provider>
  );
}

export { Provider };
export default BookContext;