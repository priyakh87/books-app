import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  Button } from 'react-bootstrap';
import BookEdit from './BookEdit';
import BookDelete from './BookDelete';
// import useBooksContext from '../hooks/use-books-context';
import '../css/bookList.css';

function BookShow({ book }) {
//   const { deleteById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);
const [showDelete, setShowDelete] = useState(false);


  // Function to handle showing the modal
  const handleShowEdit = () => setShowEdit(true);

  // Handle delete operation
  const handleDelete = () => {
      // deleteById(book.id);
      setShowDelete(true);
  };

  // Handle submit of edit form
  const handleSubmitEdit = () => {
    setShowEdit(false);
  };

    const handleSubmitDelete = () => {
        setShowDelete(false);
    }
  return (
      <div>
          {showEdit && <BookEdit onSubmit={handleSubmitEdit} book={book} showEdit={showEdit} setShowEdit={setShowEdit}  />}
    
          {showDelete && <BookDelete onSubmit={handleSubmitDelete} book={book} showDelete={showDelete} setShowDelete={setShowDelete} />}
              
          <div className="book-show">
                  <div className="card card-list">
                      {/* Link to the detailed view of the book */}
                      <Link className="link mt-4" to={`/books/${book.id}`}>
                          <img 
                              src={`https://picsum.photos/seed/${book.title}/200/200`}
                              alt={book.title}
                          />
                      </Link>
                      <div className="row">
                          <Link className="link link-title" to={`/books/${book.id}`}>
                              <div className="book-title"> {book.title}</div>
                          </Link>
                          <Link className="link link-author" to={`/books/${book.id}`}>
                              <div className="book-author"><span className='text-primary'>by &nbsp;</span> {book.author}</div>
                          </Link>
                          <div className="actions">
                              {/* Edit button to open modal */}
                              <Button onClick={handleShowEdit}  >
                                  Edit
                              </Button>
                              {/* Delete button */}
                              <Button onClick={handleDelete} variant="dark" >
                                  Delete
                              </Button>
                          </div>
                      </div>
                  </div>
          </div>
          
     
    </div>
  );
}

export default BookShow;