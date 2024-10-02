import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  Button } from 'react-bootstrap';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';
import '../css/bookList.css';

function BookShow({ book }) {
  const { deleteById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);



  // Function to handle showing the modal
  const handleShowEdit = () => setShowEdit(true);

  // Handle delete operation
  const handleDelete = () => {
    deleteById(book.id);
  };

  // Handle submit of edit form
  const handleSubmitEdit = () => {
    setShowEdit(false);
  };

  return (
      <div>
          {showEdit && <BookEdit onSubmit={handleSubmitEdit} book={book} showEdit={showEdit} setShowEdit={setShowEdit}  />}
       
          {!showEdit &&
              <div className="book-show">
                  <div className="card">
                      {/* Link to the detailed view of the book */}
                      <Link className="link" to={`/books/${book.id}`}>
                          <img
                              src={`https://picsum.photos/seed/${book.title}/300/300`}
                              alt={book.title}
                          />
                      </Link>
                      <div className="row">
                          <Link className="link" to={`/books/${book.id}`}>
                              <div className="book-title"> {book.title}</div>
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
              </div>}

      {/* Modal for editing book */}
      {/* <Modal show={showEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookEdit onSubmit={handleSubmitEdit} book={book} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default BookShow;